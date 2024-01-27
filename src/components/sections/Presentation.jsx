import { motion } from "framer-motion";
import { xTransition } from "../../utils/transitions";


const Presentation = () => {
    return (
        <div className="w-screen h-screen relative font-ubuntu flex justify-center items-center" id="home">
            <div className="text-white absolute z-30">
                <motion.h1 className="text-[18rem] leading-none" animate="visible" initial="hidden" transition={{ delay: 0.2 }} variants={xTransition}>
                    Latte
                </motion.h1>
            </div>
        </div>
    )
}

export default Presentation;