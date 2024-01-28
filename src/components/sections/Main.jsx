import { motion } from "framer-motion";
import { xTransition, opacityTransition } from "../../utils/transitions";


const Main = () => {
    return (
            <div className="w-screen h-screen relative font-ubuntu flex items-center" id="home">
                <div className="flex items-start justify-center flex-col text-white absolute z-30 pl-20">
                    <motion.h4 className="text-[5.5rem] leading-10" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={xTransition}>
                        Bad times,
                    </motion.h4>
                    <motion.h2 className="text-[7.5rem]" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} variants={xTransition}>
                        Good Coffee
                    </motion.h2>
                    <motion.p className="text-[1.3rem]" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.1 }} variants={opacityTransition}>
                        The smell of coffee, of freshly roasted beans, is the best welcome that <br />
                        we plan to offer you every day when we open the doors of our stores.
                    </motion.p>
                </div>
            </div>
    )
}

export default Main;