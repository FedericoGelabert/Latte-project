import { motion } from "framer-motion";
import { yTransition } from "../../utils/transitions";

const Reviews = () => {
    return (
        <div className="font-ubuntu w-full h-[400px] bg-black-b1 bg-cover bg-no-repeat bg-blend-soft-light bg-fixed text-center relative text-white"
            style={{ backgroundImage: 'url(https://res.cloudinary.com/federicog/image/upload/v1679083885/Latte/coffee-reviews-bg_fan3d0.jpg)' }}>
            <div className="container px-20 flex justify-center h-full items-center">
                <motion.div className="w-[400px] m-10"
                    variants={yTransition}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h5 className="text-2xl">Jamie Waters</h5>
                    <span className="text-latte-gray text-sm">Boot Café Owner</span>
                    <p className="py-5">I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying.</p>
                    <div className="flex flex-row items-center justify-between">
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
                <motion.div className="w-[400px] m-10"
                    variants={yTransition}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                >
                    <h5 className="text-2xl">Hidenori Izaki</h5>
                    <span className="text-latte-gray text-sm">World Barista Championship</span>
                    <p className="py-5">Unquestionably, the best coffee shop in the area! The atmosphere inside this coffee shop was very vibrant and relaxing.</p>
                    <div className="flex flex-row items-center justify-between">
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
                <motion.div className="w-[400px] m-10"
                    variants={yTransition}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <h5 className="text-2xl">Raul Rodas</h5>
                    <span className="text-latte-gray text-sm">Coffee Expert</span>
                    <p className="py-5">This coffee shop has it all. The ambiance, interior designs, good coffee, tasty foods, and fast wi-fi connection.
                        It is simply one of the best and my favorites coffee shop in town.</p>
                    <div className="flex flex-row items-center justify-between">
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
    )
}

export default Reviews;