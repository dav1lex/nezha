"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface ContactFormProps {
    productName?: string;
    onSuccess?: () => void;
}

export function ContactForm({ productName, onSuccess }: ContactFormProps) {
    const t = useTranslations('Contact.form')
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            company_tax_id: formData.get('company_tax_id'),
            productName: productName,
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setIsSuccess(true)
            if (onSuccess) {
                setTimeout(onSuccess, 2000)
            }
        } catch (error) {
            console.error('Submission error:', error)
            alert('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/30 rounded-lg border border-dashed animate-in fade-in-50">
                <div className="rounded-full bg-green-100 p-3 mb-4 dark:bg-green-900/20">
                    <svg
                        className="h-6 w-6 text-green-600 dark:text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                    {t('success')}
                </h3>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {productName && (
                <div className="p-3 bg-accent/50 rounded-md text-sm text-accent-foreground font-medium border border-accent">
                    {t('productInquiry', { product: productName })}
                </div>
            )}

            {/* Honeypot field for bots */}
            <div className="hidden" aria-hidden="true">
                <Input name="company_tax_id" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="name">{t('name')}</Label>
                <Input id="name" name="name" required placeholder="" className="bg-background" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input id="email" name="email" type="email" required className="bg-background" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">{t('phone')}</Label>
                    <Input id="phone" name="phone" type="tel" className="bg-background" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">{t('message')}</Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    className="min-h-[120px] bg-background"
                    defaultValue={productName ? `I am interested in ${productName}. Please send me a quote regarding pricing and availability.` : ''}
                />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ...
                    </span>
                ) : (
                    t('submit')
                )}
            </Button>
        </form>
    )
}
