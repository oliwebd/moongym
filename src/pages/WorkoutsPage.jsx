import WorkoutsComponent from '../components/Workouts';
import { motion } from 'framer-motion';

const WorkoutsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
        >
            <WorkoutsComponent />
        </motion.div>
    );
};

export default WorkoutsPage;
