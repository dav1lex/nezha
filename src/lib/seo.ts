import type { Locale } from "@/i18n/routing";
import type { Machine } from "@/lib/data";

export const baseUrl = "https://pearlmachine.com";
export const locales: Locale[] = ["en", "tr", "ar"];
export const defaultLocale: Locale = "en";

export const company = {
    name: "Pearl Machine",
    legalName: "Pearl Machine",
    phoneDisplay: "+90 532 557 69 93",
    phoneUri: "+905325576993",
    email: "sales@pearlmachine.com",
    address: "İsmetpaşa, 155sk. No:23, 34270 Sultangazi/İstanbul, Türkiye",
    streetAddress: "İsmetpaşa, 155sk. No:23",
    locality: "Sultangazi",
    region: "İstanbul",
    postalCode: "34270",
    country: "TR",
    whatsapp: "https://wa.me/905325576993",
    instagram: "https://www.instagram.com/pearl_machine",
    facebook: "https://www.facebook.com/profile.php?id=61553416411613",
};

export function absoluteUrl(path = "") {
    if (path.startsWith("https://") || path.startsWith("http://")) {
        return path;
    }

    return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternates(path = "") {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const languages = Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}${cleanPath === "/" ? "" : cleanPath}`])
    );

    return {
        ...languages,
        "x-default": `/en${cleanPath === "/" ? "" : cleanPath}`,
    };
}

export function productSeoName(machine: Machine) {
    const names: Record<string, string> = {
        "ugr-906-nw": "UGR-906-NW Dual-Color Pearl Attaching Machine",
        "ugr-906-nf": "UGR-906-NF Four-Color Pearl Attaching Machine",
        "ugr-906-nd-w": "UGR-906-ND-W Pearl and Half Pearl Attaching Machine",
        "ugr-nf-d9": "UGR-NF-D9 Computerized Pearl Design Machine",
    };

    return names[machine.slug] ?? `${machine.name} Pearl Attaching Machine`;
}

export function productImageAlt(machine: Machine) {
    return `${productSeoName(machine)} for textile production`;
}
