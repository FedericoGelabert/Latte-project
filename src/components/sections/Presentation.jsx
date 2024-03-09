import { motion } from "framer-motion";
import { latteLogoTransition, latteTransition, opacityTransition } from "../../utils/transitions";


const Presentation = () => {
    return (
        <div className="w-screen h-screen relative font-ubuntu flex justify-center items-center">
            <div className="text-white absolute z-30 flex items-center mb-24">
                <motion.img transition={{ duration: 1 }} whileInView="visible" viewport={{ once: true }} variants={latteLogoTransition} initial="hidden" src="logo-green.webp" alt="Logo" className="2xl:w-96 xl:w-[20rem] md:w-[15rem] xs:w-[10rem] w-[7rem] z-40" />
                <motion.h1 className="2xl:text-[18rem] xl:text-[15rem] md:text-[10rem] xs:text-[6rem] text-[3.8rem] leading-none z-30" animate="visible" initial="hidden" transition={{ duration: 1 }} variants={latteTransition}>
                    Latte
                </motion.h1>
            </div>
            <a href="#home" className="absolute mb-2 bottom-0">
            <motion.i className="fa-solid fa-angle-up lg:text-[5rem] text-[4rem] text-white rotate-180  arrowAnimation"
                variants={opacityTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                ></motion.i>
            </a>
        </div>
    )
}

export default Presentation;