import { useState, useEffect } from 'react';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].nav;
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Pages with dark backgrounds where text should always be white when transparent
    const isDarkPage = ['/', '/news', '/contact'].includes(location.pathname);

    // Determine text color class
    const getTextColorClass = () => {
        if (scrolled) return 'text-[var(--text-primary)]'; // Standard theme color when scrolled
        if (isDarkPage) return 'text-white'; // Force white on dark pages when transparent
        return 'text-[var(--text-primary)]'; // Standard theme color otherwise
    };

    const textColorClass = getTextColorClass();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism shadow-lg bg-[var(--bg-primary)]/80' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 z-50">
                        <h1 className="text-2xl sm:text-3xl font-oswald font-bold neon-text">
                            MOON<span className="text-toxic-lime">GYM</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
                        {[
                            { path: '/', label: t.home },
                            { path: '/workouts', label: t.workouts },
                            { path: '/trainers', label: t.trainers },
                            { path: '/news', label: t.news },
                            { path: '/pricing', label: t.pricing },
                            { path: '/contact', label: t.contact },
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-medium hover:text-toxic-lime transition-colors duration-200 uppercase tracking-wider relative group ${location.pathname === item.path ? 'text-toxic-lime' : textColorClass
                                    }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-toxic-lime"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Theme & Language Toggles & Mobile Menu Button */}
                    <div className="flex items-center space-x-4 rtl:space-x-reverse z-50">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg hover:bg-toxic-lime/10 transition-all duration-200 group ${textColorClass}`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 group-hover:text-toxic-lime transition-colors" />
                            ) : (
                                <Moon className="w-5 h-5 group-hover:text-toxic-lime transition-colors" />
                            )}
                        </button>

                        <button
                            onClick={toggleLanguage}
                            className={`p-2 rounded-lg hover:bg-toxic-lime/10 transition-all duration-200 group flex items-center space-x-1 rtl:space-x-reverse ${textColorClass}`}
                            aria-label="Toggle language"
                        >
                            <Languages className="w-5 h-5 group-hover:text-toxic-lime transition-colors" />
                            <span className="text-xs font-semibold group-hover:text-toxic-lime transition-colors">
                                {language === 'en' ? 'AR' : 'EN'}
                            </span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-toxic-lime/10 transition-all duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-toxic-lime" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 bg-[var(--bg-primary)] pt-20 px-4"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {[
                                { path: '/', label: t.home },
                                { path: '/workouts', label: t.workouts },
                                { path: '/trainers', label: t.trainers },
                                { path: '/news', label: t.news },
                                { path: '/pricing', label: t.pricing },
                                { path: '/contact', label: t.contact },
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-2xl font-oswald font-bold hover:text-toxic-lime transition-colors duration-200 ${location.pathname === item.path ? 'text-toxic-lime' : ''
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
