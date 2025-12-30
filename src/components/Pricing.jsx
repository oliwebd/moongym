import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Pricing = () => {
    const { language } = useLanguage();
    const t = translations[language].pricing;

    const plans = [
        {
            name: t.basic.name,
            price: t.basic.price,
            features: t.basic.features,
            cta: t.basic.cta,
            highlighted: false,
        },
        {
            name: t.pro.name,
            price: t.pro.price,
            features: t.pro.features,
            cta: t.pro.cta,
            badge: t.pro.badge,
            highlighted: true,
        },
        {
            name: t.elite.name,
            price: t.elite.price,
            features: t.elite.features,
            cta: t.elite.cta,
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="py-20 sm:py-32 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold mb-4 neon-text">
                        {t.title}
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative bg-[var(--bg-primary)] rounded-xl p-8 border-2 transition-all duration-300 ${plan.highlighted
                                    ? 'border-toxic-lime shadow-neon-lime md:-translate-y-4 scale-105'
                                    : 'border-transparent hover:border-toxic-lime'
                                }`}
                        >
                            {/* Badge for Recommended Plan */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse bg-toxic-lime text-black px-4 py-1 rounded-full text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>{plan.badge}</span>
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-2xl font-oswald font-bold mb-4 text-center">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-6 text-center">
                                <span className="text-5xl font-oswald font-bold neon-text">
                                    {plan.price}
                                </span>
                                <span className="text-[var(--text-secondary)] text-lg ms-2">
                                    / {t.monthly}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mb-8 space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse">
                                        <Check className="w-5 h-5 text-toxic-lime flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${plan.highlighted
                                        ? 'bg-toxic-lime text-black hover:shadow-neon-lime hover:scale-105'
                                        : 'bg-[var(--bg-secondary)] hover:bg-toxic-lime/10 hover:border-toxic-lime border-2 border-transparent'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
