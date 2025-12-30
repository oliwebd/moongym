import PricingComponent from '../components/Pricing';
import { motion } from 'framer-motion';

const PricingPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
        >
            <PricingComponent />
        </motion.div>
    );
};

export default PricingPage;
