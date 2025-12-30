import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Calendar, Clock, User, Activity, MapPin } from 'lucide-react';

const SchedulePage = () => {
    const { language } = useLanguage();
    const t = translations[language].schedule;

    // Get unique days from translations
    // Note: In a real app we might handle dates dynamically, here we use fixed days
    const orderedDays = language === 'ar'
        ? ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
        : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [activeDay, setActiveDay] = useState(orderedDays[0]);

    const filteredClasses = t.classes.filter(c => c.day === activeDay);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-32 pb-20 bg-[var(--bg-primary)]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold mb-4 neon-text">
                        {t.title}
                    </h1>
                    <p className="text-xl text-[var(--text-secondary)] font-oswald tracking-widest uppercase">
                        {t.subtitle}
                    </p>
                </div>

                {/* Days Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {orderedDays.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-6 py-3 rounded-full font-oswald font-bold transition-all duration-300 border border-transparent
                ${activeDay === day
                                    ? 'bg-toxic-lime text-black shadow-neon-lime'
                                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-accent)]/50'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Classes List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {filteredClasses.length > 0 ? (
                                filteredClasses.map((session, index) => (
                                    <div
                                        key={index}
                                        className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-white/5 hover:border-toxic-lime/30 transition-all duration-300 group flex flex-col md:flex-row items-center justify-between gap-6"
                                    >
                                        {/* Time & Title */}
                                        <div className="flex-1 text-center md:text-start rtl:md:text-right">
                                            <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-2 text-[var(--text-accent)] mb-2 font-mono">
                                                <Clock className="w-4 h-4" />
                                                <span>{session.time}</span>
                                            </div>
                                            <h3 className="text-2xl font-oswald font-bold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">
                                                {session.name}
                                            </h3>
                                        </div>

                                        {/* Details */}
                                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-[var(--text-secondary)]">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-[var(--text-accent)]" />
                                                <span>{session.trainer}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Activity className="w-4 h-4 text-[var(--text-accent)]" />
                                                <span>{session.intensity}</span>
                                            </div>
                                        </div>

                                        {/* Book Button */}
                                        <button className="px-6 py-2 rounded bg-transparent border border-[var(--text-accent)] text-[var(--text-accent)] font-oswald font-bold hover:bg-[var(--text-accent)] hover:text-white dark:hover:text-black transition-all duration-300">
                                            {t.book}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-20 text-[var(--text-secondary)]">
                                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>No classes scheduled for this day.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </motion.div>
    );
};

export default SchedulePage;
