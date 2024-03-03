import { motion } from "framer-motion";
import { yTransition, opacityTransition } from "../../utils/transitions";

const Visit = () => {
    return (
        <div className="w-screen h-screen relative font-ubuntu flex items-center justify-center" id="visit">
            <div className="w-1/2 h-full flex flex-col items-end justify-center text-white z-30 gap-10 mr-24 mt-12">
                <div className="w-[40rem] flex flex-col items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1847.6567034090804!2d-100.98036162143102!3d22.152139085404375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDA5JzA3LjciTiAxMDDCsDU4JzQ1LjQiVw!5e0!3m2!1ses-419!2suy!4v1707437712482!5m2!1ses-419!2suy" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade" className="w-11/12 h-[18rem] rounded-3xl relative border-8 border-[rgba(10,57,52,.89)]"></iframe>
                    <motion.div className="bg-[rgba(223,219,182,.9)] w-56 h-8  rounded-b-lg flex justify-center items-center"
                        variants={yTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-black">San Luis Potosí,  México</p>
                    </motion.div>
                </div>
                <div className="w-[40rem] flex flex-col items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1637.3311007514562!2d-55.96263646109402!3d-34.83958479178069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDUwJzIyLjUiUyA1NcKwNTcnNDAuOSJX!5e0!3m2!1ses-419!2suy!4v1707439581454!5m2!1ses-419!2suy" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade" className="w-11/12 h-[18rem] rounded-3xl relative border-8 border-[rgba(10,57,52,.89)]"></iframe>
                    <motion.div className="bg-[rgba(223,219,182,.9)] w-48 h-8 rounded-b-lg flex justify-center items-center"
                        variants={yTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-black">Canelones, Uruguay</p>
                    </motion.div>
                </div>
            </div>
            <div className="w-1/2 h-full flex items-center">
                <motion.img src="map-location.webp" alt="" className="absolute w-[42rem] drop-shadow-2xl"
                    variants={opacityTransition}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                />
            </div>
        </div>
    )
}

export default Visit;