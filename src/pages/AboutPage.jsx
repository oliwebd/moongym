import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Shield, Target, Users } from 'lucide-react';

const AboutPage = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    const icons = [Shield, Target, Users];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-32 pb-20 bg-cyber-gradient"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold mb-4 neon-text">
                        {t.title}
                    </h1>
                    <p className="text-xl text-toxic-lime font-oswald tracking-widest uppercase">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden border border-toxic-lime/30 shadow-neon-lime group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-transparent to-transparent z-10"></div>
                        <img
                            src="/images/hero_bg_gym_1767079903074.png"
                            alt="MoonGYM Facade"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-oswald font-bold text-white mb-4 border-l-4 border-toxic-lime px-4 rtl:border-l-0 rtl:border-r-4">
                                {t.mission}
                            </h2>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                {t.missionText}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-oswald font-bold text-white mb-6">
                                {t.values}
                            </h2>
                            <ul className="space-y-4">
                                {t.valuesList.map((value, index) => {
                                    const Icon = icons[index % icons.length];
                                    return (
                                        <li key={index} className="flex items-center space-x-4 rtl:space-x-reverse bg-[var(--bg-secondary)] p-4 rounded-lg border border-white/5 hover:border-toxic-lime/50 transition-colors">
                                            <div className="p-2 bg-toxic-lime/10 rounded-full text-toxic-lime">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-lg font-medium text-white">{value}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
};

export default AboutPage;
