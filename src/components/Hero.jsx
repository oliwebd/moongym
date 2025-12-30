import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero_bg_gym_1767079903074.png"
                    alt="Gym Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pitch-black via-transparent to-pitch-black"></div>
            </div>

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-cyber-gradient opacity-90 mix-blend-multiply">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-toxic-lime/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-neon-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-toxic-lime/10 border border-toxic-lime/30 rounded-full px-4 py-2 mb-6">
                            <Zap className="w-4 h-4 text-toxic-lime" />
                            <span className="text-sm font-semibold text-toxic-lime uppercase tracking-wider">
                                {t.subtitle}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-oswald font-bold mb-6 neon-text leading-tight"
                    >
                        {t.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="group relative inline-flex items-center space-x-3 rtl:space-x-reverse bg-toxic-lime text-black px-8 py-4 rounded-lg font-bold text-lg overflow-hidden hover:shadow-neon-lime transition-all duration-300 transform hover:scale-105">
                            <span className="relative z-10">{t.cta}</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
                            <div className="absolute inset-0 bg-gradient-to-r from-toxic-lime to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-toxic-lime/50 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-toxic-lime rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
