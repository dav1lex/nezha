export interface Machine {
    id: string;
    slug: string;
    name: string;
    category: 'nail' | 'pearl' | 'hotfix';
    image: string; // URL to cPanel/External hosting
    description: {
        en: string;
        ar: string;
        tr: string;
    };
    features: {
        en: string[];
        ar: string[];
        tr: string[];
    };
    specs: {
        speed: string;
        size: string;
        weight: string;
        power: string;
    };
}

export const machines: Machine[] = [
    {
        id: "ugr-906-nd-w",
        slug: "ugr-906-nd-w",
        name: "UGR-906-ND-W",
        category: "pearl",
        image: "https://pearlmachine.com/wp-content/uploads/2021/06/UGR-906-ND-W-1.jpg",
        // ^ This is a Placeholder until we get your real asset link structure
        description: {
            en: "Automatic pearl attaching machine with high precision laser marking.",
            ar: "آلة تركيب اللؤلؤ الأوتوماتيكية بدقة عالية.",
            tr: "Yüksek hassasiyetli lazer işaretleme özellikli otomatik inci çakma makinesi."
        },
        features: {
            en: [
                "Precise pointing with laser marking",
                "High working speed up to 275 pcs/min",
                "Touch screen control panel"
            ],
            ar: [
                "تحديد دقيق باستخدام الليزر",
                "سرعة عمل عالية تصل إلى 275 قطعة/دقيقة",
                "لوحة تحكم تعمل باللمس"
            ],
            tr: [
                "Lazer işaretleme ile hassas konumlama",
                "Dakikada 275 adete kadar yüksek çalışma hızı",
                "Dokunmatik kontrol paneli"
            ]
        },
        specs: {
            speed: "250-275 pcs/min",
            size: "600 x 650 x 1300 mm",
            weight: "80 kg",
            power: "220V / 50-60Hz"
        }
    }
];
