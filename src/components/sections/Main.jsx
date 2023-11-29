import { motion } from "framer-motion";
import { xTransition, opacityTransition } from "../../utils/transitions";


const Main = () => {
    return (
        <div className="w-screen h-[88vh] relative font-ubuntu" id="home">
            <div className="container px-20">
                <div>
                    <div className="flex items-start justify-center flex-col text-white absolute z-30">
                        <motion.h4 className="text-[5.5rem] leading-10" animate="visible" initial="hidden" transition={{ delay: 0.2 }} variants={xTransition}>
                            Bad times,
                        </motion.h4>
                        <motion.h2 className="text-[7.5rem]" animate="visible" initial="hidden" transition={{ delay: 0.5 }} variants={xTransition}>
                            Good Coffee
                        </motion.h2>
                        <motion.p className="text-[1.3rem]" animate="visible" initial="hidden" transition={{ delay: 1.1 }} variants={opacityTransition}>
                            The smell of coffee, of freshly roasted beans, is the best welcome that <br />
                            we plan to offer you every day when we open the doors of our stores.
                        </motion.p>
                    </div>
                </div>
                <div className="absolute z-30">
                    <a href="#about">
                        <motion.div className="arrow flex justify-center items-center z-20 relative h-[5vh]" animate="visible" initial="hidden" transition={{ delay: 2, x: { duration: 0.5 } }} variants={opacityTransition}>
                            <p></p>
                            <p></p>
                        </motion.div>
                    </a>
                </div>
            </div>
            <div className="absolute w-full h-full z-20 bg-cover bg-center bg-no-repeat" style={{ 'background': 'linear-gradient(to right, black 5%, rgba(255, 255, 255,0))', 'backgroundColor': 'rgba(0,0,0,.3)' }}></div>
            <div className="absolute w-full h-full z-10">
                <video className="w-full h-full object-cover" src="./main-lofi-video.mp4" loop autoPlay muted>
                </video>
            </div>
        </div>
    )
}

export default Main;