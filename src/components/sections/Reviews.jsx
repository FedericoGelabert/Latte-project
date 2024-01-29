import { motion } from "framer-motion";
import { yTransition } from "../../utils/transitions";

const Reviews = () => {
    return (
        <div className="w-screen h-screen relative font-ubuntu flex items-center" id="reviews">
            <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
                <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10">Top Reviews</h2>
                <div className="font-ubuntu w-screen h-3/12 flex justify-center items-center text-center relative text-white">
                        <motion.div className="w-3/12 bg-[rgba(110,70,52,.89)] py-8 rounded-3xl"
                            variants={yTransition}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h5 className="text-2xl">Jamie Waters</h5>
                            <span className="text-latte-gray text-sm">Boot Café Owner</span>
                            <p className="py-5 px-10">I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying.</p>
                            <div className="flex flex-row items-center justify-between px-6">
                                <p>Rate: <span>4.5/5</span></p>
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="w-3/12 h-[280px] m-10 bg-[rgba(110,70,52,.89)] py-12 rounded-3xl"
                            variants={yTransition}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                        >
                            <h5 className="text-2xl">Hidenori Izaki</h5>
                            <span className="text-latte-gray text-sm">World Barista Championship</span>
                            <p className="py-5 px-10">Unquestionably, the best coffee shop in the area! The atmosphere inside this coffee shop was very vibrant and relaxing.</p>
                            <div className="flex flex-row items-center justify-between px-6">
                                <p>Rate: <span>5/5</span></p>
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="w-3/12 h-[280px] bg-[rgba(110,70,52,.89)] py-8 rounded-3xl"
                            variants={yTransition}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <h5 className="text-2xl">Raul Rodas</h5>
                            <span className="text-latte-gray text-sm">Coffee Expert</span>
                            <p className="py-5 px-10">This coffee shop has it all. The ambiance, interior designs, good coffee, tasty foods, and fast wi-fi connection. It is simply one of the best and my favorites coffee shop in town.</p>
                            <div className="flex flex-row items-center justify-between px-6">
                                <p>Rate: <span>4.5/5</span></p>
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
    )
}

export default Reviews;