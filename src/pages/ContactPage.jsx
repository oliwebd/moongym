import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    const { language } = useLanguage();
    // We'll minimally extend translations or use footer ones + some hardcoded defaults for now if needed.
    // Ideally, valid translations should be added to translations.js.
    // For now we'll rely on the existing footer dictionary for common labels and add some hardcoded placeholders
    // that can be properly internationalized in the next step.
    const t = translations[language];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-32 pb-20 bg-cyber-gradient"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold mb-4 neon-text">
                            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)]">
                            {language === 'ar'
                                ? 'نحن هنا لمساعدتك في بدء رحلتك'
                                : 'We are here to help you start your journey'}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-toxic-lime/20 hover:border-toxic-lime/50 transition-colors">
                                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                                    <div className="p-3 bg-toxic-lime/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-toxic-lime" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald font-bold mb-2">
                                            {language === 'ar' ? 'البريد الإلكتروني' : 'Email Us'}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">{t.footer.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-toxic-lime/20 hover:border-toxic-lime/50 transition-colors">
                                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                                    <div className="p-3 bg-toxic-lime/10 rounded-lg">
                                        <Phone className="w-6 h-6 text-toxic-lime" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald font-bold mb-2">
                                            {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">{t.footer.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-toxic-lime/20 hover:border-toxic-lime/50 transition-colors">
                                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                                    <div className="p-3 bg-toxic-lime/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-toxic-lime" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald font-bold mb-2">
                                            {language === 'ar' ? 'الموقع' : 'Visit Us'}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">{t.footer.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-toxic-lime/20">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 font-oswald">
                                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-[var(--bg-primary)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-toxic-lime transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 font-oswald">
                                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-[var(--bg-primary)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-toxic-lime transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 font-oswald">
                                        {language === 'ar' ? 'الرسالة' : 'Message'}
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-[var(--bg-primary)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-toxic-lime transition-colors"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-toxic-lime text-black font-bold py-4 rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse hover:opacity-90 transition-opacity"
                                >
                                    <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                                    <Send className="w-5 h-5 rtl:scale-x-[-1]" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
