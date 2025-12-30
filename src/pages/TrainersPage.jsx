import TrainersComponent from '../components/Trainers';
import { motion } from 'framer-motion';

const TrainersPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
        >
            <TrainersComponent />
        </motion.div>
    );
};

export default TrainersPage;
