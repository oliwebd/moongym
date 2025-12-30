import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Trainers = () => {
    const { language } = useLanguage();
    const t = translations[language].trainers;

    const trainers = [
        {
            name: t.alex.name,
            specialty: t.alex.specialty,
            bio: t.alex.bio,
            image: '/images/trainer_male_1767079919139.png',
            isPhoto: true
        },
        {
            name: t.sarah.name,
            specialty: t.sarah.specialty,
            bio: t.sarah.bio,
            image: '/images/trainer_female_1767079933615.png',
            isPhoto: true
        },
        {
            name: t.mike.name,
            specialty: t.mike.specialty,
            bio: t.mike.bio,
            image: '🧘',
            isPhoto: false
        },
        {
            name: t.emma.name,
            specialty: t.emma.specialty,
            bio: t.emma.bio,
            image: '🥗',
            isPhoto: false
        },
    ];

    return (
        <section id="trainers" className="py-20 sm:py-32 bg-[var(--bg-primary)]">
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

                {/* Horizontal Scrollable Carousel */}
                <div className="relative">
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group flex-shrink-0 w-80 snap-center"
                            >
                                <div className="relative bg-[var(--bg-secondary)] rounded-xl p-6 border-2 border-transparent hover:border-toxic-lime transition-all duration-300 h-full">
                                    {/* Image or Emoji */}
                                    <div className="mb-4 flex justify-center">
                                        <div className={`w-24 h-24 rounded-full ${trainer.isPhoto ? 'overflow-hidden border-2 border-toxic-lime' : 'bg-toxic-lime/10'} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
                                            {trainer.isPhoto ? (
                                                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                                            ) : (
                                                trainer.image
                                            )}
                                        </div>
                                    </div>
                                    {/* Name */}
                                    <h3 className="text-2xl font-oswald font-bold mb-2 text-center group-hover:text-toxic-lime transition-colors duration-300">
                                        {trainer.name}
                                    </h3>

                                    {/* Specialty */}
                                    <div className="mb-4 text-center">
                                        <span className="inline-block bg-toxic-lime/20 text-toxic-lime px-3 py-1 rounded-full text-sm font-semibold">
                                            {trainer.specialty}
                                        </span>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-[var(--text-secondary)] text-sm text-center leading-relaxed">
                                        {trainer.bio}
                                    </p>

                                    {/* Bottom Neon Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-toxic-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default Trainers;
