import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const NewsPage = () => {
    const { language } = useLanguage();
    const t = translations[language].news;

    // Using the new stock image for the first item, and placeholders/gradients for others
    const newsImages = [
        '/images/news_equipment_1767079948390.png',
        null, // Will use a gradient fallback
        null
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-32 pb-20 bg-cyber-gradient"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold mb-4 neon-text">
                        {t.title}
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)]">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-[var(--bg-secondary)] rounded-xl overflow-hidden border border-toxic-lime/20 hover:border-crimson-red/50 transition-all duration-300 hover:shadow-neon-red shadow-lg"
                        >
                            {/* Image Area */}
                            <div className="h-48 overflow-hidden relative">
                                {newsImages[index] ? (
                                    <img
                                        src={newsImages[index]}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${index % 2 === 0 ? 'from-crimson-red/20 to-pitch-black' : 'from-toxic-lime/20 to-pitch-black'} flex items-center justify-center`}>
                                        <Tag className={`w-12 h-12 ${index % 2 === 0 ? 'text-crimson-red' : 'text-toxic-lime'} opacity-50`} />
                                    </div>
                                )}

                                {/* Date Badge */}
                                <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-toxic-lime/30 flex items-center space-x-2 rtl:space-x-reverse">
                                    <Calendar className="w-3 h-3 text-toxic-lime" />
                                    <span className="text-xs font-mono text-white">{item.date}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-oswald font-bold mb-3 group-hover:text-crimson-red transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                                    {item.excerpt}
                                </p>

                                <button className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-bold text-toxic-lime hover:text-crimson-red transition-colors duration-300">
                                    <span>{t.readMore}</span>
                                    <ArrowRight className="w-4 h-4 rtl:scale-x-[-1]" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default NewsPage;
