import { motion } from 'framer-motion';
import { Dumbbell, Heart, Flame, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Workouts = () => {
    const { language } = useLanguage();
    const t = translations[language].workouts;

    const workouts = [
        {
            icon: Dumbbell,
            title: t.strength.name,
            description: t.strength.description,
            color: 'toxic-lime',
        },
        {
            icon: Flame,
            title: t.cardio.name,
            description: t.cardio.description,
            color: 'crimson-red',
        },
        {
            icon: Heart,
            title: t.flexibility.name,
            description: t.flexibility.description,
            color: 'neon-blue',
        },
        {
            icon: Zap,
            title: t.hiit.name,
            description: t.hiit.description,
            color: 'toxic-lime',
        },
    ];

    return (
        <section id="workouts" className="py-20 sm:py-32 bg-[var(--bg-secondary)]">
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
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workouts.map((workout, index) => {
                        const Icon = workout.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-[var(--bg-primary)] rounded-xl p-6 border-2 border-transparent hover:border-toxic-lime transition-all duration-300 overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-toxic-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`mb-4 inline-flex p-3 rounded-lg bg-${workout.color}/10 group-hover:shadow-neon-lime transition-all duration-300`}>
                                        <Icon className={`w-8 h-8 text-${workout.color} group-hover:scale-110 transition-transform duration-300`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-oswald font-bold mb-3 group-hover:text-toxic-lime transition-colors duration-300">
                                        {workout.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                        {workout.description}
                                    </p>

                                    {/* Neon Border Effect on Hover */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-toxic-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Workouts;
