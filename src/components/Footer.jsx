import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const nav = translations[language].nav;

    return (
        <footer className="bg-[var(--bg-primary)] border-t border-toxic-lime/20 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-oswald font-bold neon-text mb-4">
                            MOON<span className="text-toxic-lime">GYM</span>
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-4">
                            {t.tagline}
                        </p>
                        {/* Social Media */}
                        <div className="flex space-x-4 rtl:space-x-reverse">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-toxic-lime/10 hover:text-toxic-lime transition-all duration-200"
                                    aria-label="Social media link"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-oswald font-bold mb-4">{t.quickLinks}</h4>
                        <ul className="space-y-2">
                            {[
                                { path: '/', label: nav.home },
                                { path: '/workouts', label: nav.workouts },
                                { path: '/trainers', label: nav.trainers },
                                { path: '/pricing', label: nav.pricing },
                            ].map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="text-[var(--text-secondary)] hover:text-toxic-lime transition-colors duration-200 text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-oswald font-bold mb-4">{t.contact}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-[var(--text-secondary)]">
                                <Mail className="w-5 h-5 text-toxic-lime flex-shrink-0" />
                                <span>{t.email}</span>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-[var(--text-secondary)]">
                                <Phone className="w-5 h-5 text-toxic-lime flex-shrink-0" />
                                <span>{t.phone}</span>
                            </li>
                            <li className="flex items-start space-x-3 rtl:space-x-reverse text-sm text-[var(--text-secondary)]">
                                <MapPin className="w-5 h-5 text-toxic-lime flex-shrink-0 mt-0.5" />
                                <span>{t.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-toxic-lime/20 pt-8 text-center">
                    <p className="text-sm text-[var(--text-secondary)]">
                        {t.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
