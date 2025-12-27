export interface Machine {
    id: string;
    slug: string;
    name: string;
    category: 'nail' | 'pearl' | 'hotfix' | 'ultrasonic';
    images: string[]; // URLs to cPanel CDN
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
        additional?: string;
    };
}

export const machines: Machine[] = [
    {
        id: "ugr-906-nd-w",
        slug: "ugr-906-nd-w",
        name: "UGR-906-ND-W",
        category: "pearl",
        images: [
            "https://cdn.pearlmachine.com/nt-906-nd-w_1.jpg",
            "https://cdn.pearlmachine.com/nt-906-nd-w_2.jpg"
        ],
        description: {
            en: "Round pearl and Half pearl in one machine. Easy to shift between types with one button.",
            ar: "لؤلؤ دائري ولؤلؤ نصف دائري في آلة واحدة. سهولة التبديل بين الأنواع بضغطة زر واحدة.",
            tr: "Yuvarlak ve yarım inci tek makinede. Tek tuşla kolay geçiş imkanı."
        },
        features: {
            en: [
                "9 x Mold sets included as standard",
                "Precise pointing with laser marking",
                "High working speed up to 275 pcs/min",
                "Patented Pin rail system from Korea"
            ],
            ar: [
                "9 مجموعات قوالب متضمنة بشكل قياسي",
                "تحديد دقيق باستخدام الليزر",
                "سرعة عمل عالية تصل إلى 275 قطعة/دقيقة",
                "نظام سكة المسامير الحاصل على براءة اختراع من كوريا"
            ],
            tr: [
                "Standart olarak 9 adet kalıp seti dahildir",
                "Lazer işaretleme ile hassas konumlama",
                "Dakikada 275 adete kadar yüksek çalışma hızı",
                "Kore malı patentli çivi ray sistemi"
            ]
        },
        specs: {
            speed: "Max 275 pcs/min",
            size: "550 x 580 x 1200 mm",
            weight: "90 kg",
            power: "220V, 1-Phase, 50/60Hz, 200W",
            additional: "Half Pearl Size: Max 15mm"
        }
    },
    {
        id: "ugr-906-nf",
        slug: "ugr-906-nf",
        name: "UGR-906-NF",
        category: "pearl",
        images: [
            "https://cdn.pearlmachine.com/nt-906-nf_1.jpg",
            "https://cdn.pearlmachine.com/nt-906-nf_2.jpg"
        ],
        description: {
            en: "Shift colors within seconds. Optimized for high-speed pearl attaching on various garments.",
            ar: "تبديل الألوان خلال ثوانٍ. مصممة لتركيب اللؤلؤ عالي السرعة على مختلف الملابس.",
            tr: "Saniyeler içinde renk değiştirme özelliği. Çeşitli giysilerde yüksek hızlı inci çakma için optimize edilmiştir."
        },
        features: {
            en: [
                "Color shift within few seconds",
                "Simple shift to other sizes (4mm-10mm)",
                "Precise laser marking light",
                "Patented Pin rail system"
            ],
            ar: [
                "تبديل اللون خلال ثوانٍ قليلة",
                "تحويل بسيط لأحجام أخرى (4مم - 10مم)",
                "ضوء تحديد ليزر دقيق",
                "نظام سكة المسامير الحاصل على براءة اختراع"
            ],
            tr: [
                "Birkaç saniye içinde renk değiştirme",
                "Diğer boyutlara basit geçiş (4mm-10mm)",
                "Hassas lazer işaretleme ışığı",
                "Patentli çivi ray sistemi"
            ]
        },
        specs: {
            speed: "Max 270 pcs/min",
            size: "550 x 580 x 1200 mm",
            weight: "85 kg",
            power: "220V, 1-Phase, 50/60Hz, 200W",
            additional: "Pearl Size: 4, 5, 6, 8, 10mm"
        }
    },
    {
        id: "ugr-906-nw",
        slug: "ugr-906-nw",
        name: "UGR-906-NW",
        category: "pearl",
        images: [
            "https://cdn.pearlmachine.com/nt-906-nw_1.jpg",
            "https://cdn.pearlmachine.com/nt-906-nw_2.jpg"
        ],
        description: {
            en: "Attach 2 colors or 2 sizes simultaneously by pressing one button.",
            ar: "تركيب لونين أو حجمين في وقت واحد بضغطة زر واحدة.",
            tr: "Tek tuşla aynı anda 2 renk veya 2 boyut çakma özelliği."
        },
        features: {
            en: [
                "2 Colors or 2 Sizes one button control",
                "Convenient upper attaching system for clear sight",
                "Max speed 275pcs per minute",
                "Spare parts and manual included"
            ],
            ar: [
                "تحكم بلونين أو حجمين بضغطة زر واحدة",
                "نظام تركيب علوي مريح لرؤية واضحة",
                "أقصى سرعة 275 قطعة في الدقيقة",
                "يتضمن قطع الغيار والدليل"
            ],
            tr: [
                "Tek tuşla 2 renk veya 2 boyut kontrolü",
                "Net görüş için kullanışlı üstten takma sistemi",
                "Dakikada maksimum 275 adet",
                "Yedek parçalar ve kılavuz dahildir"
            ]
        },
        specs: {
            speed: "Max 275 pcs/min",
            size: "580 x 580 x 1200 mm",
            weight: "75 kg",
            power: "220V, 1-Phase, 50/60Hz, 200W",
            additional: "Air Compressor required: Over 1.5HP"
        }
    },
    {
        id: "ugr-nf-d9",
        slug: "ugr-nf-d9",
        name: "UGR-NF-D9",
        category: "ultrasonic",
        images: [
            "https://cdn.pearlmachine.com/nt-906-nf_d9_1.jpg",
            "https://cdn.pearlmachine.com/NT906-NF-D9-2.jpg"
        ],
        description: {
            en: "Computerized decorative pearl design machine with embroidery punching file support.",
            ar: "آلة تصميم اللؤلؤ الزخرفية المحوسبة مع دعم ملفات التطريز.",
            tr: "Nakış desen dosyası destekli bilgisayarlı dekoratif inci tasarım makinesi."
        },
        features: {
            en: [
                "Supports Dst. or Dsb. design files",
                "Design Capacity: 30 files save",
                "Offer design making program",
                "Design Size: 330 x 420mm"
            ],
            ar: [
                "يدعم ملفات التصميم Dst. أو Dsb.",
                "سعة التصميم: حفظ 30 ملفًا",
                "يتضمن برنامج صنع التصاميم",
                "حجم التصميم: 330 × 420 مم"
            ],
            tr: [
                "Dst. veya Dsb. desen dosyalarını destekler",
                "Desen kapasitesi: 30 dosya kaydı",
                "Desen yapma programı dahildir",
                "Desen boyutu: 330 x 420mm"
            ]
        },
        specs: {
            speed: "Design dependent",
            size: "N/A",
            weight: "N/A",
            power: "Standard Industrial",
            additional: "Pearl SIze: 4mm to 10mm"
        }
    }
];
