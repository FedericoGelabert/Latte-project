import { motion } from "framer-motion";
import { xTransition, opacityTransition } from "../../utils/transitions";


const Main = () => {
    return (
            <div className="xl:w-screen h-screen relative font-ubuntu flex items-center lg:pb-0 pb-40" id="home">
                <div className="flex items-start justify-center flex-col text-white sm:absolute relative z-30 sm:pl-20 pl-10 sm:px-0 px-6">
                    <motion.h4 className="xl:text-[5.5rem] lg:text-[4rem] sm:text-[2.8rem] xs:text-[2.5rem] text-[2.2rem] leading-10" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={xTransition}>
                        Bad times,
                    </motion.h4>
                    <motion.h2 className="xl:text-[7.5rem] lg:text-[6rem] md:text-[5rem] sm:text-[4.2rem] xs:text-[3.5rem] text-[2.8rem]" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} variants={xTransition}>
                        Good Coffee
                    </motion.h2>
                    <motion.p className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] sm:text-[0.8rem] text-[1rem] sm:text-left text-justify" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.8 }} variants={opacityTransition}>
                        The smell of coffee, of freshly roasted beans, is the best welcome that <br className="sm:inline-block hidden" />
                        we plan to offer you every day when we open the doors of our stores.
                    </motion.p>
                </div>
            </div>
    )
}

export default Main;