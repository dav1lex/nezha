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
        label: string; // Translation key
        value: string;
    }[];
}

export const machines: Machine[] = [
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
            en: "Advanced dual-color pearl attaching machine. Two colors in the same size can be worked without changing any part, featuring a convenient upper attaching system.",
            ar: "آلة تركيب لؤلؤ متطورة ثنائية اللون. يمكن العمل بلونين بنفس الحجم دون تغيير أي جزء، مع نظام تركيب علوي مريح.",
            tr: "Gelişmiş çift renkli inci çakma makinesi. Herhangi bir parça değiştirmeden aynı boyutta iki renk çalışılabilir, kullanışlı üstten takma sistemine sahiptir."
        },
        features: {
            en: [
                "New technology for attaching pearls from upper supplying mold",
                "Pearl pins are supplied from lower side",
                "No need to mark on reverse side of garments any more",
                "Two colors in a same size can be worked without changing any part",
                "Simple change for other pearl sizes",
                "Accurate attaching on an exact point with laser marking",
                "Convenient working in a clear sight with upper attaching",
                "Excellently designed for strong durability and minimum error rate"
            ],
            ar: [
                "تقنية جديدة لتركيب اللؤلؤ من قالب التغذية العلوي",
                "يتم توريد مسامير اللؤلؤ من الجانب السفلي",
                "لا داعي لوضع علامات على الجانب الخلفي للملابس بعد الآن",
                "يمكن العمل بلونين بنفس الحجم دون تغيير أي جزء",
                "تغيير بسيط لأحجام اللؤلؤ الأخرى",
                "تركيب دقيق في نقطة محددة مع تحديد بالليزر",
                "عمل مريح في رؤية واضحة مع التركيب العلوي",
                "تصميم ممتاز لمتانة قوية وأقل معدل خطأ"
            ],
            tr: [
                "Üstten beslemeli kalıp ile inci çakma için yeni teknoloji",
                "İnci çivileri alt taraftan beslenir",
                "Artık giysilerin ters tarafını işaretlemeye gerek yok",
                "Herhangi bir parça değiştirmeden aynı boyutta iki renk çalışılabilir",
                "Diğer inci boyutları için basit değişim",
                "Lazer işaretleme ile tam noktaya doğru çakma",
                "Üstten çakma ile net görüş ve rahat çalışma",
                "Güçlü dayanıklılık ve minimum hata oranı için mükemmel tasarım"
            ]
        },
        specs: [
            { label: "speed", value: "190 pcs. / minute" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "colors", value: "refer to the last page on the catalogue" },
            { label: "weight", value: "65 kgs / 70 kgs" },
            { label: "size", value: "550 mm (W) x 580 mm (L) x 1200 mm (H)" },
            { label: "air", value: "over 1.0 HP" },
            { label: "power", value: "220 volts, 1-phase, 50/60 Hz" },
            { label: "consumption", value: "200 watts" }
        ]
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
            en: "High-capacity four-color pearl machine. Features a 230mm head size and the ability to work with four colors simultaneously without mechanical changes.",
            ar: "آلة لؤلؤ رباعية الألوان عالية السعة. تتميز بحجم رأس 230 مم والقدرة على العمل بأربعة ألوان في وقت واحد دون تغييرات ميكانيكية.",
            tr: "Yüksek kapasiteli dört renkli inci makinesi. 230 mm kafa boyutuna ve mekanik değişiklik yapmadan aynı anda dört renkle çalışma özelliğine sahiptir."
        },
        features: {
            en: [
                "New technology for attaching pearls from upper supplying mold",
                "Pearl pins are supplied from lower side",
                "No need to mark on reverse side of garments any more",
                "Four colors in a same size can be worked without changing any part",
                "Simple change for other pearl sizes",
                "Accurate attaching on an exact point with laser marking",
                "Convenient working in a clear sight with upper attaching",
                "Excellently designed for strong durability and minimum error rate"
            ],
            ar: [
                "تقنية جديدة لتركيب اللؤلؤ من قالب التغذية العلوي",
                "يتم توريد مسامير اللؤلؤ من الجانب السفلي",
                "لا داعي لوضع علامات على الجانب الخلفي للملابس بعد الآن",
                "يمكن العمل بأربعة ألوان بنفس الحجم دون تغيير أي جزء",
                "تغيير بسيط لأحجام اللؤلؤ الأخرى",
                "تركيب دقيق في نقطة محددة مع تحديد بالليزر",
                "عمل مريح في رؤية واضحة مع التركيب العلوي",
                "تصميم ممتاز لمتانة قوية وأقل معدل خطأ"
            ],
            tr: [
                "Üstten beslemeli kalıp ile inci çakma için yeni teknoloji",
                "İnci çivileri alt taraftan beslenir",
                "Artık giysilerin ters tarafını işaretlemeye gerek yok",
                "Herhangi bir parça değiştirmeden aynı boyutta dört renk çalışılabilir",
                "Diğer inci boyutları için basit değişim",
                "Lazer işaretleme ile tam noktaya doğru çakma",
                "Üstten çakma ile net görüş ve rahat çalışma",
                "Güçlü dayanıklılık ve minimum hata oranı için mükemmel tasarım"
            ]
        },
        specs: [
            { label: "headSize", value: "230mm" },
            { label: "speed", value: "190 pcs. / minute" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "colors", value: "refer to the last page on the catalogue" },
            { label: "weight", value: "65 kgs / 70 kgs" },
            { label: "size", value: "550 mm (W) x 580 mm (L) x 1200 mm (H)" },
            { label: "air", value: "over 1.0 HP" },
            { label: "power", value: "220 volts, 1-phase, 50/60 Hz" },
            { label: "consumption", value: "200 watts" }
        ]
    },
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
            en: "Versatile machine for both standard and half pearls. Engineered for high precision and efficiency with various pearl types.",
            ar: "آلة متعددة الاستخدامات لكل من اللؤلؤ القياسي ونصف اللؤلؤ. مصممة لدقة وكفاءة عالية مع أنواع مختلفة من اللؤلؤ.",
            tr: "Hem standart hem de yarım inciler için çok yönlü makine. Çeşitli inci türleri ile yüksek hassasiyet ve verimlilik için tasarlanmıştır."
        },
        features: {
            en: [
                "New technology for attaching various half pearls from upper side",
                "Pearl pins are supplied from lower side",
                "Simple change for other pearl sizes",
                "Accurate attaching on an exact point with laser marking",
                "Convenient working in a clear sight with upper attaching",
                "Excellently designed for strong durability and minimum error rate"
            ],
            ar: [
                "تقنية جديدة لتركيب العديد من أنصاف اللؤلؤ من الجانب العلوي",
                "يتم توريد مسامير اللؤلؤ من الجانب السفلي",
                "تغيير بسيط لأحجام اللؤلؤ الأخرى",
                "تركيب دقيق في نقطة محددة مع تحديد بالليزر",
                "عمل مريح في رؤية واضحة مع التركيب العلوي",
                "تصميم ممتاز لمتانة قوية وأقل معدل خطأ"
            ],
            tr: [
                "Üst taraftan çeşitli yarım incileri çakmak için yeni teknoloji",
                "İnci çivileri alt taraftan beslenir",
                "Diğer inci boyutları için basit değişim",
                "Lazer işaretleme ile tam noktaya doğru çakma",
                "Üstten çakma ile net görüş ve rahat çalışma",
                "Güçlü dayanıklılık ve minimum hata oranı için mükemmel tasarım"
            ]
        },
        specs: [
            { label: "speed", value: "190 pcs./min (pearl) 160 pcs./min (half pearl)" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "halfPearlSize", value: "refer to the last page on the catalogue" },
            { label: "colors", value: "refer to the last page on the catalogue" },
            { label: "weight", value: "65 kgs / 70 kgs" },
            { label: "size", value: "550 mm (W) x 580 mm (L) x 1200 mm (H)" },
            { label: "air", value: "over 1.0 HP" },
            { label: "power", value: "220 volts, 1-phase, 50/60 Hz" },
            { label: "consumption", value: "300 watts" }
        ]
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
            en: "Fully computerized high-speed design machine. Supports up to four types of pearls simultaneously with advanced design software compatibility.",
            ar: "آلة تصميم عالية السرعة محوسبة بالكامل. تدعم ما يصل إلى أربعة أنواع من اللؤلؤ في وقت واحد مع توافق متقدم مع برامج التصميم.",
            tr: "Tam bilgisayarlı yüksek hızlı tasarım makinesi. Gelişmiş tasarım yazılımı uyumluluğu ile aynı anda dört tipe kadar inciyi destekler."
        },
        features: {
            en: [
                "All operations are performed automatically without errors",
                "Four types of pearls can be used without any mechanical modifications",
                "Accurate position due to laser marking",
                "High visibility and space for convenient operation",
                "Suitable for all kinds of garments and various fabrics",
                "Compatible with dst, rst files (Roland, Sierra)",
                "Includes design making program and basic tool set"
            ],
            ar: [
                "يتم تنفيذ جميع العمليات تلقائيًا دون أخطاء",
                "يمكن استخدام أربعة أنواع من اللؤلؤ دون أي تعديلات ميكانيكية",
                "موقع دقيق بفضل التحديد بالليزر",
                "رؤية ومساحة لمزيد من الراحة في التشغيل",
                "مناسبة لجميع أنواع الملابس والأقمشة المختلفة",
                "متوافقة مع ملفات dst و rst (Roland، Sierra)",
                "تتضمن برنامج صنع التصاميم ومجموعة الأدوات الأساسية"
            ],
            tr: [
                "Tüm işlemler hatasız ve otomatik olarak gerçekleştirilir",
                "Mekanik değişiklik yapmadan dört çeşit inci kullanılabilir",
                "Lazer işaretleme sayesinde hassas pozisyonlama",
                "Rahat çalışma için yüksek görüş ve alan sağlar",
                "Her türlü giysi ve çeşitli kumaşlar için uygundur",
                "dst, rst dosyaları (Roland, Sierra) ile uyumludur",
                "Desen yapma programı ve temel alet seti dahildir"
            ]
        },
        specs: [
            { label: "workSpace", value: "420 mm (W) x 330 mm (L)" },
            { label: "speed", value: "100 rpm - 280 rpm (up to 500 rpm if necessary)" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "weight", value: "100 kgs / 120 kgs" },
            { label: "size", value: "1010 mm (W) x 1040 mm (L) x 890 mm (H)" },
            { label: "air", value: "over 1.5 HP" },
            { label: "power", value: "110 VAC - 220 VAC, 1-phase, 50Hz / 60Hz" },
            { label: "consumption", value: "300 watts" }
        ]
    }
];
