import Hero from '../components/Hero';
import Workouts from '../components/Workouts';
import Trainers from '../components/Trainers';
import Pricing from '../components/Pricing';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            {/* We can reproduce a teaser version of sections here or just correct routing. 
          For a "High End" feel, the home page typically acts as a landing page 
          scrolling through highlights. But user asked for specific pages. 
          Let's keep the home page as a composite for maximum impact, 
          but redundant with sub-pages? 
          Actually, let's keep the Home page as the FULL Scroll Experience,
          but ALSO have dedicated pages for direct linking / SEO / specific browsing.
      */}
            <Workouts />
            <Trainers />
            <Pricing />
        </motion.div>
    );
};

export default Home;
