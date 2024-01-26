import { motion } from "framer-motion";
import { xTransition } from "../../utils/transitions";
import Header from "./Header";


const Presentation = () => {
    return (
        <div className="w-[100vw] h-[100vh] relative font-ubuntu flex justify-center items-center" id="home">
            <div className="text-white absolute z-30">
                <motion.h1 className="text-[18rem] leading-none" animate="visible" initial="hidden" transition={{ delay: 0.2 }} variants={xTransition}>
                    Latte
                </motion.h1>
            </div>
            <div className="absolute w-full h-[100vh] z-20 bg-cover bg-center bg-no-repeat" style={{ 'background': 'linear-gradient(to right, black 5%, rgba(255, 255, 255,0))', 'backgroundColor': 'rgba(0,0,0,.3)' }}></div>
            <div className="absolute w-full h-[100vh] z-10">
                <video className="w-full h-full object-cover" src="./main-lofi-video.mp4" loop autoPlay muted>
                </video>
            </div>
        </div>
    )
}

export default Presentation;