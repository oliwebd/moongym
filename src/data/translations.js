export const translations = {
    en: {
        nav: {
            home: 'Home',
            workouts: 'Workouts',
            trainers: 'Trainers',
            pricing: 'Pricing',
            news: 'News',
            about: 'About Us',
            schedule: 'Schedule',
            contact: 'Contact',
            returnPolicy: 'Return Policy',
        },
        schedule: {
            title: 'Class Schedule',
            subtitle: 'Join our elite group training sessions',
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: 'Time',
            class: 'Class',
            trainer: 'Trainer',
            intensity: 'Intensity',
            book: 'Book Now',
            classes: [
                { day: 'Monday', time: '06:00 AM', name: 'Morning Glory HIIT', trainer: 'Sarah Johnson', intensity: 'High' },
                { day: 'Monday', time: '05:00 PM', name: 'Powerlifting Basics', trainer: 'Alex Martinez', intensity: 'High' },
                { day: 'Monday', time: '07:00 PM', name: 'Yoga Flow', trainer: 'Mike Chen', intensity: 'Low' },
                { day: 'Tuesday', time: '07:00 AM', name: 'Cardio Blast', trainer: 'Sarah Johnson', intensity: 'Medium' },
                { day: 'Tuesday', time: '06:00 PM', name: 'CrossFit', trainer: 'Alex Martinez', intensity: 'Very High' },
                { day: 'Wednesday', time: '06:00 AM', name: 'Sunrise Yoga', trainer: 'Mike Chen', intensity: 'Low' },
                { day: 'Wednesday', time: '05:30 PM', name: 'BodyPump', trainer: 'Emma Williams', intensity: 'High' },
                { day: 'Thursday', time: '06:30 AM', name: 'Spin Class', trainer: 'Sarah Johnson', intensity: 'High' },
                { day: 'Thursday', time: '06:00 PM', name: 'Strength & Conditioning', trainer: 'Alex Martinez', intensity: 'High' },
                { day: 'Friday', time: '05:00 PM', name: 'Friday Night Fight', trainer: 'Sarah Johnson', intensity: 'Very High' },
                { day: 'Saturday', time: '09:00 AM', name: 'Weekend Warrior', trainer: 'Alex Martinez', intensity: 'High' },
                { day: 'Saturday', time: '11:00 AM', name: 'Recovery Yoga', trainer: 'Mike Chen', intensity: 'Low' },
                { day: 'Sunday', time: '10:00 AM', name: 'Mobility & Flex', trainer: 'Mike Chen', intensity: 'Low' },
            ]
        },
        about: {
            title: 'Our Story',
            subtitle: 'Forging Elite Fitness Since 2024',
            mission: 'Our Mission',
            missionText: 'To provide a sanctuary for those who refuse to be average. MoonGYM is not just a place to lift; it is a crucible for transformation.',
            values: 'Our Values',
            valuesList: [
                'Relentless Intensity',
                'Cyber-Enhanced Performance',
                'Community of the Strong'
            ]
        },
        policy: {
            title: 'Return & Cancellation Policy',
            lastUpdated: 'Last Updated: Dec 30, 2025',
            sections: [
                {
                    heading: 'Membership Cancellations',
                    content: 'You may cancel your membership at any time with a 30-day notice. Cancellations must be done in person or via the member portal.'
                },
                {
                    heading: 'Refunds',
                    content: 'We offer a full refund on merchandise within 14 days of purchase if unused and in original packaging. Membership fees are non-refundable generally, except for the first 7 days of a new contract.'
                },
                {
                    heading: 'Personal Training',
                    content: 'Sessions must be cancelled at least 24 hours in advance to avoid being charged. Packages expire 6 months after purchase.'
                }
            ]
        },
        news: {
            title: 'Latest Updates',
            subtitle: 'Stay informed about our community',
            readMore: 'Read More',
            items: [
                {
                    title: 'New Cyber-Lifting Equipment Arrived',
                    date: 'Dec 28, 2025',
                    excerpt: 'Experience the future of lifting with our new smart-resistance machines.',
                },
                {
                    title: 'Extended Opening Hours',
                    date: 'Dec 25, 2025',
                    excerpt: 'We are now open 24/7 for Elite members to train whenever inspiration strikes.',
                },
                {
                    title: 'Nutrition Workshop with Emma',
                    date: 'Jan 05, 2026',
                    excerpt: 'Join us for a deep dive into metabolic conditioning and fuel strategies.',
                },
            ]
        },
        hero: {
            title: 'Transform Your Body',
            subtitle: 'Unleash Your Potential',
            description: 'Join the ultimate fitness experience. State-of-the-art equipment, expert trainers, and a community that pushes you beyond limits.',
            cta: 'Start Your Journey',
        },
        workouts: {
            title: 'Elite Training Programs',
            subtitle: 'Scientific training protocols designed for maximum performance',
            strength: {
                name: 'Strength Training',
                description: 'Build muscle and power with our advanced resistance programs.',
                benefits: ['Hypertrophy', 'Max Strength', 'Bone Density'],
                intensity: 'High',
                duration: '60-90 min'
            },
            cardio: {
                name: 'Cardio Blast',
                description: 'Burn calories and boost endurance with high-intensity cardio sessions.',
                benefits: ['Endurance', 'Heart Health', 'Fat Loss'],
                intensity: 'Medium-High',
                duration: '45-60 min'
            },
            flexibility: {
                name: 'Flexibility & Mobility',
                description: 'Improve range of motion and prevent injuries with targeted stretching.',
                benefits: ['Recovery', 'Joint Health', 'Posture'],
                intensity: 'Low',
                duration: '30-45 min'
            },
            hiit: {
                name: 'HIIT Sessions',
                description: 'Maximum results in minimum time with explosive interval training.',
                benefits: ['Metabolic Rate', 'Speed', 'Agility'],
                intensity: 'Very High',
                duration: '30-45 min'
            },
        },
        trainers: {
            title: 'Meet Your Coaches',
            subtitle: 'World-class trainers dedicated to your success',
            alex: {
                name: 'Alex Martinez',
                specialty: 'Strength & Conditioning',
                bio: 'With over a decade of experience in competitive powerlifting, Alex specializes in biomechanics and progressive overload strategies. He has trained national-level athletes and helps clients build raw strength without compromising safety.',
                certifications: ['CSCS', 'USAW Level 2'],
                philosophy: 'Strength is the foundation of all movement.'
            },
            sarah: {
                name: 'Sarah Johnson',
                specialty: 'HIIT & Cardio',
                bio: 'A former Olympic track athlete, Sarah brings elite-level conditioning to the general public. Her high-energy classes function on the "red zone" principle, pushing metabolic thresholds for maximum caloric burn.',
                certifications: ['NASM CPT', 'Precision Nutrition'],
                philosophy: 'Your only limit is your mind.'
            },
            mike: {
                name: 'Mike Chen',
                specialty: 'Mobility & Recovery',
                bio: 'Mike combines his background in physical therapy with yoga to create injury-prevention protocols. He focuses on longevity, joint health, and functional movement patterns that keep you training for life.',
                certifications: ['DPT', 'RYT-500'],
                philosophy: 'Move better, live longer.'
            },
            emma: {
                name: 'Emma Williams',
                specialty: 'Nutrition & Wellness',
                bio: 'Emma believes fitness starts in the kitchen. As a registered dietitian, she builds custom fueling strategies that align with your training cycles, ensuring you recovery faster and perform better.',
                certifications: ['RD', 'CSSD'],
                philosophy: 'Fuel your ambition.'
            },
        },
        pricing: {
            title: 'Choose Your Plan',
            subtitle: 'Flexible membership options to fit your lifestyle',
            monthly: 'Monthly',
            basic: {
                name: 'Basic',
                price: '$49',
                features: [
                    'Access to gym floor & weights',
                    'Locker room & shower facilities',
                    'Free Wi-Fi access',
                    'MoonGYM mobile app access',
                    '1 Complimentary fitness assessment',
                ],
                cta: 'Get Started',
            },
            pro: {
                name: 'Pro',
                price: '$89',
                badge: 'Most Popular',
                features: [
                    'Everything in Basic',
                    'Unlimited Group Fitness Classes',
                    '5 Personal Training sessions/year',
                    'Access to Sauna & Steam Room',
                    'Quarterly Nutrition Consultation',
                    'Guest Pass (2 per month)',
                ],
                cta: 'Go Pro',
            },
            elite: {
                name: 'Elite',
                price: '$149',
                features: [
                    'All Pro benefits included',
                    'Unlimited Personal Training',
                    'Private VIP Locker Room',
                    'Complimentary Towel Service',
                    'Monthly Massage Therapy',
                    'Custom Meal Planning & Support',
                    '24/7 Gym Access via Biometric',
                ],
                cta: 'Join Elite',
            },
        },
        footer: {
            tagline: 'Transform. Achieve. Dominate. The future of fitness is here.',
            quickLinks: 'Quick Links',
            contact: 'Contact Info',
            email: 'support@moongym.com',
            phone: '+1 (555) 000-GYM1',
            address: 'Sector 7, Neo-Tokyo District, GC 12345',
            rights: '© 2025 Moon Gym. All rights reserved. Powered by Cyberdyne Systems.',
        },
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            workouts: 'التمارين',
            trainers: 'المدربون',
            pricing: 'الأسعار',
            news: 'الأخبار',
            about: 'من نحن',
            schedule: 'الجدول',
            contact: 'اتصل بنا',
            returnPolicy: 'سياسة الاسترجاع',
        },
        schedule: {
            title: 'جدول الحصص',
            subtitle: 'انضم إلى جلسات التدريب الجماعية للنخبة',
            days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
            time: 'الوقت',
            class: 'الحصة',
            trainer: 'المدرب',
            intensity: 'الشدة',
            book: 'احجز الآن',
            classes: [
                { day: 'الاثنين', time: '٠٦:٠٠ ص', name: 'الصباح HIIT', trainer: 'سارة جونسون', intensity: 'عالية' },
                { day: 'الاثنين', time: '٠٥:٠٠ م', name: 'أساسيات رفع الأثقال', trainer: 'أليكس مارتينيز', intensity: 'عالية' },
                { day: 'الاثنين', time: '٠٧:٠٠ م', name: 'يوغا فلو', trainer: 'مايك تشين', intensity: 'منخفضة' },
                { day: 'الثلاثاء', time: '٠٧:٠٠ ص', name: 'كارديو بلاست', trainer: 'سارة جونسون', intensity: 'متوسطة' },
                { day: 'الثلاثاء', time: '٠٦:٠٠ م', name: 'كروس فيت', trainer: 'أليكس مارتينيز', intensity: 'عالية جداً' },
                { day: 'الأربعاء', time: '٠٦:٠٠ ص', name: 'يوغا الشروق', trainer: 'مايك تشين', intensity: 'منخفضة' },
                { day: 'الأربعاء', time: '٠٥:٣٠ م', name: 'بودي بامب', trainer: 'إيما ويليامز', intensity: 'عالية' },
                { day: 'الخميس', time: '٠٦:٣٠ ص', name: 'حصة الدراجات', trainer: 'سارة جونسون', intensity: 'عالية' },
                { day: 'الخميس', time: '٠٦:٠٠ م', name: 'القوة والتكييف', trainer: 'أليكس مارتينيز', intensity: 'عالية' },
                { day: 'الجمعة', time: '٠٥:٠٠ م', name: 'قتال الجمعة', trainer: 'سارة جونسون', intensity: 'عالية جداً' },
                { day: 'السبت', time: '٠٩:٠٠ ص', name: 'محارب عطلة الأسبوع', trainer: 'أليكس مارتينيز', intensity: 'عالية' },
                { day: 'السبت', time: '١١:٠٠ ص', name: 'يوغا التعافي', trainer: 'مايك تشين', intensity: 'منخفضة' },
                { day: 'الأحد', time: '١٠:٠٠ ص', name: 'المرونة والحركة', trainer: 'مايك تشين', intensity: 'منخفضة' },
            ]
        },
        about: {
            title: 'قصتنا',
            subtitle: 'نصنع نخبة اللياقة البدنية منذ ٢٠٢٤',
            mission: 'مهمتنا',
            missionText: 'توفير ملاذ لأولئك الذين يرفضون أن يكونوا عاديين. MoonGYM ليس مجرد مكان للتدريب؛ إنه بوتقة للتحول.',
            values: 'قيمنا',
            valuesList: [
                'كثافة لا هوادة فيها',
                'أداء مدعوم تقنياً',
                'مجتمع الأقوياء'
            ]
        },
        policy: {
            title: 'سياسة الاسترجاع والإلغاء',
            lastUpdated: 'آخر تحديث: ٣٠ ديسمبر ٢٠٢٥',
            sections: [
                {
                    heading: 'إلغاء الاشتراكات',
                    content: 'يمكنك إلغاء عضويتك في أي وقت مع إشعار قبل 30 يومًا. يجب أن يتم الإلغاء شخصيًا أو عبر بوابة الأعضاء.'
                },
                {
                    heading: 'الاسترداد المالي',
                    content: 'نقدم استردادًا كاملاً للبضائع في غضون 14 يومًا من الشراء إذا كانت غير مستخدمة وفي عبوتها الأصلية. رسوم العضوية غير قابلة للاسترداد بشكل عام، باستثناء الأيام السبعة الأولى من العقد الجديد.'
                },
                {
                    heading: 'التدريب الشخصي',
                    content: 'يجب إلغاء الجلسات قبل 24 ساعة على الأقل لتجنب دفع الرسوم. تنتهي صلاحية الباقات بعد 6 أشهر من الشراء.'
                }
            ]
        },
        news: {
            title: 'آخر التحديثات',
            subtitle: 'ابق على اطلاع بمجتمعنا',
            readMore: 'اقرأ المزيد',
            items: [
                {
                    title: 'وصول معدات رفع الأثقال السيبرانية الجديدة',
                    date: '٢٨ ديسمبر ٢٠٢٥',
                    excerpt: 'جرب مستقبل رفع الأثقال مع آلات المقاومة الذكية الجديدة لدينا.',
                },
                {
                    title: 'ساعات عمل ممتدة',
                    date: '٢٥ ديسمبر ٢٠٢٥',
                    excerpt: 'نحن مفتوحون الآن على مدار الساعة طوال أيام الأسبوع لأعضاء النخبة.',
                },
                {
                    title: 'ورشة عمل التغذية مع إيما',
                    date: '٠٥ يناير ٢٠٢٦',
                    excerpt: 'انضم إلينا للتعمق في التكييف الأيضي استراتيجيات الوقود.',
                },
            ]
        },
        hero: {
            title: 'حوّل جسمك',
            subtitle: 'أطلق العنان لإمكانياتك',
            description: 'انضم إلى تجربة اللياقة البدنية المثالية. معدات حديثة، مدربون خبراء، ومجتمع يدفعك لتجاوز حدودك.',
            cta: 'ابدأ رحلتك',
        },
        workouts: {
            title: 'برامج تدريب النخبة',
            subtitle: 'بروتوكولات تدريب علمية مصممة لتحقيق أقصى قدر من الأداء',
            strength: {
                name: 'تدريب القوة',
                description: 'بناء العضلات والقوة مع برامج المقاومة المتقدمة.',
                benefits: ['تضخيم العضلات', 'القوة القصوى', 'كثافة العظام'],
                intensity: 'عالية',
                duration: '٦٠-٩٠ دقيقة'
            },
            cardio: {
                name: 'تمارين الكارديو',
                description: 'حرق السعرات وتعزيز القدرة على التحمل بجلسات عالية الكثافة.',
                benefits: ['التحمل', 'صحة القلب', 'حرق الدهون'],
                intensity: 'متوسطة-عالية',
                duration: '٤٥-٦٠ دقيقة'
            },
            flexibility: {
                name: 'المرونة والحركة',
                description: 'تحسين نطاق الحركة ومنع الإصابات بتمارين الإطالة المستهدفة.',
                benefits: ['التعافي', 'صحة المفاصل', 'الوضعية'],
                intensity: 'منخفضة',
                duration: '٣٠-٤٥ دقيقة'
            },
            hiit: {
                name: 'تدريب HIIT',
                description: 'أقصى النتائج في أقل وقت مع التدريب المتقطع الانفجاري.',
                benefits: ['معدل الأيض', 'السرعة', 'الرشاقة'],
                intensity: 'عالية جداً',
                duration: '٣٠-٤٥ دقيقة'
            },
        },
        trainers: {
            title: 'تعرف على مدربيك',
            subtitle: 'مدربون عالميون مكرسون لنجاحك',
            alex: {
                name: 'أليكس مارتينيز',
                specialty: 'القوة والتكييف',
                bio: 'مع أكثر من عقد من الخبرة في رفع الأثقال التنافسي، يتخصص أليكس في الميكانيكا الحيوية واستراتيجيات الحمل الزائد التدريجي. قام بتدريب رياضيين على المستوى الوطني ويساعد العملاء على بناء القوة الخام دون المساومة على السلامة.',
                certifications: ['CSCS', 'USAW Level 2'],
                philosophy: 'القوة هي أساس كل حركة.'
            },
            sarah: {
                name: 'سارة جونسون',
                specialty: 'HIIT والكارديو',
                bio: 'رياضية أولمبية سابقة، تجلب سارة التكييف على مستوى النخبة للجمهور العام. تعمل فصولها عالية الطاقة على مبدأ "المنطقة الحمراء"، مما يدفع عتبات التمثيل الغذائي لأقصى حرق للسعرات.',
                certifications: ['NASM CPT', 'Precision Nutrition'],
                philosophy: 'حدودك الوحيدة هي عقلك.'
            },
            mike: {
                name: 'مايك تشين',
                specialty: 'الحركة والتعافي',
                bio: 'يجمع مايك بين خلفيته في العلاج الطبيعي واليوغا لإنشاء بروتوكولات الوقاية من الإصابات. يركز على طول العمر وصحة المفاصل وأنماط الحركة الوظيفية التي تبقيك تتدرب مدى الحياة.',
                certifications: ['DPT', 'RYT-500'],
                philosophy: 'تحرك بشكل أفضل، عش لفترة أطول.'
            },
            emma: {
                name: 'إيما ويليامز',
                specialty: 'التغذية والعافية',
                bio: 'تؤمن إيما بأن اللياقة تبدأ في المطبخ. بصفتها أخصائية تغذية مسجلة، تقوم ببناء استراتيجيات تغذية مخصصة تتوافق مع دورات التدريب الخاصة بك.',
                certifications: ['RD', 'CSSD'],
                philosophy: 'غذِ طموحك.'
            },
        },
        pricing: {
            title: 'اختر خطتك',
            subtitle: 'خيارات عضوية مرنة تناسب أسلوب حياتك',
            monthly: 'شهريًا',
            basic: {
                name: 'أساسي',
                price: '٤٩$',
                features: [
                    'الوصول إلى معدات الصالة الرياضية',
                    'مرافق غرف تبديل الملابس',
                    'خدمة واي فاي مجانية',
                    'الوصول إلى تطبيق MoonGYM',
                    'تقييم لياقة بدنية مجاني واحد',
                ],
                cta: 'ابدأ الآن',
            },
            pro: {
                name: 'احترافي',
                price: '٨٩$',
                badge: 'الأكثر شعبية',
                features: [
                    'كل ما في الأساسي',
                    'فصول لياقة بدنية جماعية غير محدودة',
                    '٥ جلسات تدريب شخصي/سنة',
                    'الوصول إلى الساونا وغرفة البخار',
                    'استشارة تغذية ربع سنوية',
                    'تصريح ضيف (٢ شهريًا)',
                ],
                cta: 'كن محترفًا',
            },
            elite: {
                name: 'النخبة',
                price: '١٤٩$',
                features: [
                    'جميع مزايا الاحترافي',
                    'تدريب شخصي غير محدود',
                    'غرفة تغيير ملابس VIP خاصة',
                    'خدمة مناشف مجانية',
                    'علاج بالتدليك شهريًا',
                    'تخطيط وجبات مخصص ودعم',
                    'وصول ٢٤/٧ عبر القياسات الحيوية',
                ],
                cta: 'انضم للنخبة',
            },
        },
        footer: {
            tagline: 'حوّل. حقق. سيطر. مستقبل اللياقة هنا.',
            quickLinks: 'روابط سريعة',
            contact: 'معلومات الاتصال',
            email: 'support@moongym.com',
            phone: '(٥٥٥) ٠٠٠- جيم ١+',
            address: 'قطاع ٧، منطقة نيو طوكيو، GC ١٢٣٤٥',
            rights: '© ٢٠٢٥ مون جيم. جميع الحقوق محفوظة. مدعوم من أنظمة سايبردين.',
        },
    },
};
