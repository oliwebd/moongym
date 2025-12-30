import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { FileText, AlertCircle } from 'lucide-react';

const ReturnPolicyPage = () => {
    const { language } = useLanguage();
    const t = translations[language].policy;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-32 pb-20 bg-[var(--bg-primary)]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                <div className="mb-12 border-b border-toxic-lime/20 pb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold mb-4 text-white flex items-center gap-4">
                        <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-toxic-lime" />
                        {t.title}
                    </h1>
                    <p className="text-[var(--text-secondary)] font-mono text-sm">
                        {t.lastUpdated}
                    </p>
                </div>

                <div className="space-y-12">
                    {t.sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-xl border border-white/5 hover:border-toxic-lime/30 transition-colors"
                        >
                            <h2 className="text-xl sm:text-2xl font-oswald font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-toxic-lime rounded-full inline-block"></span>
                                {section.heading}
                            </h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {section.content}
                            </p>
                        </motion.section>
                    ))}
                </div>

                <div className="mt-12 p-4 bg-crimson-red/10 border border-crimson-red/30 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-crimson-red shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)]">
                        {language === 'ar'
                            ? 'يرجى ملاحظة أن القواعد قد تتغير. يرجى مراجعة هذه الصفحة بانتظام.'
                            : 'Please note that rules are subject to change. Please review this page regularly.'}
                    </p>
                </div>

            </div>
        </motion.div>
    );
};

export default ReturnPolicyPage;
