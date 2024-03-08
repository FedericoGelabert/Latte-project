import { motion } from "framer-motion";
import { yTransition, opacityTransition } from "../../utils/transitions";

const Visit = () => {
    return (
        <div className="w-screen h-screen relative font-ubuntu flex justify-center items-center lg:mt-0 mt-96" id="visit">
            <div className="flex flex-col justify-center items-center text-white z-30 gap-10 xl:mr-12 2xl:mr-24 mr-0 mt-12">
                <div className="bg-[rgba(223,219,182,.9)] lg:mb-0 mb-24 sm:w-[20rem] xs:w-[20rem] w-[18rem] lg:w-0 pr-[5rem] sm:h-[5rem] h-[4.5rem] lg:h-0 flex justify-center items-center lg:py-0 py-5 rounded-3xl relative">
                    <h2 className="text-gray-700 sm:text-[2.5rem] text-[2.2rem] lg:text-[0rem] pl-6">Vist us</h2>
                    <img src="map-location.webp" alt="Map Location" className="absolute xs:w-32 lg:w-0 w-[6rem] xs:ml-[20rem] ml-[17rem] -rotate-12" />
                </div>
                <div className="3xl:w-[40rem] 2xl:w-[32rem] sm:w-[30rem] xs:w-[25rem] w-full 2xl:h-[20rem] lg:h-[15rem] xs:h-[20rem] h-[15rem] flex flex-col items-center">
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
                <div className="3xl:w-[40rem] 2xl:w-[32rem] sm:w-[30rem] xs:w-[25rem] w-full 2xl:h-[20rem] lg:h-[15rem] xs:h-[20rem] h-[15rem] flex flex-col items-center">
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
            <div className="lg:h-full h-0 flex items-center">
                <motion.img src="map-location.webp" alt="Map location" className="lg:w-[30rem] 2xl:w-[35rem] w-[0rem] drop-shadow-2xl lg:ml-12"
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