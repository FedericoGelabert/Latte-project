import { motion } from "framer-motion";
import { yTransition } from "../../utils/transitions";

const Reviews = () => {
    return (
        <div className="w-screen h-screen relative font-ubuntu flex items-center" id="reviews">
            <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
                <div className="bg-[rgba(223,219,182,.9)] mb-24 w-[25rem] pr-24 h-[5rem] flex justify-center items-center rounded-3xl relative">
                    <h2 className="text-gray-700 text-[2.5rem]">Top Reviews</h2>
                    <img src="medal.webp" alt="Coffee Shop" className="absolute w-32 ml-[22rem] mt-6" />
                </div>
                <div className="swiper font-ubuntu w-screen h-3/12 flex justify-center items-center text-center relative text-white">
                    <motion.div className="w-3/12 h-[17rem] bg-[rgba(10,57,52,.89)] py-8 rounded-3xl px-8 mx-4 shadow-xl shadow-black"
                        variants={yTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="w-full flex items-center">
                            <div className="flex flex-col items-start">
                                <h5 className="text-2xl">Jamie Waters</h5>
                                <span className="text-latte-gray text-sm">Coffee Critic</span>
                            </div>
                        </div>
                        <p className="py-5 text-left" >"I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying."</p>
                        <div className="flex">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="w-3/12 h-[17rem] bg-[rgba(10,57,52,.89)] py-8 rounded-3xl px-8 mx-4 shadow-xl shadow-black"
                        variants={yTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="w-full flex items-center">
                            <div className="flex flex-col items-start">
                                <h5 className="text-2xl">Raul Rodas</h5>
                                <span className="text-latte-gray text-sm">Coffee Expert</span>
                            </div>
                        </div>
                        <p className="py-5 text-left" >"This coffee shop has it all. The ambiance, interior designs, good coffee, tasty foods, and fast wi-fi connection. It is simply one of the best and my favorites coffee shop in town."</p>
                        <div className="flex">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="w-3/12 h-[17rem] bg-[rgba(10,57,52,.89)] py-8 rounded-3xl px-8 mx-4 shadow-xl shadow-black"
                        variants={yTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="w-full flex items-center">
                            <div className="flex flex-col items-start">
                                <h5 className="text-2xl">Hidenori Izaki</h5>
                                <span className="text-latte-gray text-sm">World Barista Championship</span>
                            </div>
                        </div>
                        <p className="py-5 text-left" >"Unquestionably, the best coffee shop in the area! The atmosphere inside this coffee shop was very vibrant and relaxing. I really enjoyed the experience."</p>
                        <div className="flex">
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