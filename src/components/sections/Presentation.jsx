import { motion } from "framer-motion";
import { latteLogoTransition, latteTransition } from "../../utils/transitions";


const Presentation = () => {
    return (
            <div className="xl:w-screen xl:h-screen relative font-ubuntu flex justify-center items-center">
                <div className="text-white absolute z-30 flex items-center">
                    <motion.img transition={{ duration: 1 }} whileInView="visible" viewport={{ once: true }} variants={latteLogoTransition} initial="hidden" src="logo-green.webp" alt="Logo" className="w-96 z-40" />
                    <motion.h1 className="text-[18rem] leading-none z-30" animate="visible" initial="hidden" transition={{ duration: 1 }} variants={latteTransition}>
                        Latte
                    </motion.h1>
                </div>
            </div>
    )
}

export default Presentation;