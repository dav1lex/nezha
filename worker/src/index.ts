// Cloudflare Worker — contact form receiver.
// Sends transactional email via Cloudflare Email Sending (EMAIL binding).
// Deploy: `wrangler deploy` from this directory after onboarding pearlmachine.com
// for Email Sending in the Cloudflare dashboard.

interface Env {
  EMAIL: SendEmail;
  CONTACT_EMAIL?: string;
  FROM_EMAIL?: string;
  ALLOWED_ORIGIN?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  productName?: string;
  company_tax_id?: string;
}

const ALLOWED_ORIGIN_DEFAULT = 'https://pearlmachine.com';

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function json(body: unknown, status: number, origin: string): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function salesHtml(p: Required<Pick<ContactPayload, 'name' | 'email' | 'message'>> & ContactPayload): string {
  const productLine = p.productName
    ? `<p><strong>Product Interest:</strong> ${escapeHtml(p.productName)}</p>`
    : '';
  return `
    <h2>New Inquiry from Website</h2>
    <p><strong>Name:</strong> ${escapeHtml(p.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(p.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(p.phone || 'Not provided')}</p>
    ${productLine}
    <br/>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(p.message).replace(/\n/g, '<br>')}</p>
  `;
}

function autoReplyHtml(name: string, productName?: string): string {
  const productLine = productName ? ` regarding the <strong>${escapeHtml(productName)}</strong>` : '';
  return `
    <div style="font-family: sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">Hello ${escapeHtml(name)},</h2>
      <p>Thank you for reaching out to <strong>Pearl Machine</strong>.</p>
      <p>We have received your inquiry${productLine} and our sales team will get back to you as soon as possible.</p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 0.9em; color: #666;">This is an automated message, please do not reply directly to this email.</p>
      <p style="font-size: 0.9em; color: #666;"><strong>Website:</strong> <a href="https://pearlmachine.com">pearlmachine.com</a></p>
    </div>
  `;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || ALLOWED_ORIGIN_DEFAULT;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, origin);
    }

    let body: ContactPayload;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, origin);
    }

    // Honeypot: silently accept and drop bot submissions.
    if (body.company_tax_id) {
      return json({ success: true }, 200, origin);
    }

    const { name, email, message, phone, productName } = body;
    if (!name || !email || !message) {
      return json({ error: 'Missing required fields' }, 400, origin);
    }

    const from = env.FROM_EMAIL || 'Pearl Machine Website <noreply@pearlmachine.com>';
    const to = env.CONTACT_EMAIL || 'sales@pearlmachine.com';
    const subject = productName
      ? `New Quote Request for: ${productName}`
      : `New Contact Form Submission from ${name}`;

    try {
      await env.EMAIL.send({
        from,
        to,
        replyTo: email,
        subject,
        html: salesHtml({ name, email, message, phone, productName }),
      });
    } catch (err) {
      console.error('Sales email send failed:', err);
      return json({ error: 'Failed to send email' }, 500, origin);
    }

    // Auto-responder: fire-and-forget so the user-facing response is fast.
    ctx.waitUntil(
      env.EMAIL.send({
        from: `Pearl Machine Sales <${env.FROM_EMAIL ? env.FROM_EMAIL.replace(/^.+<|>$/g, '') : 'noreply@pearlmachine.com'}>`,
        to: email,
        subject: productName
          ? `Quick Update: Your Quote for ${productName}`
          : 'Message Received - Pearl Machine Sales',
        html: autoReplyHtml(name, productName),
      }).catch((err) => console.error('Auto-responder failed:', err)),
    );

    return json({ success: true }, 200, origin);
  },
};
