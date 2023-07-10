import { motion } from "framer-motion";
import { yTransition } from "../../utils/transitions";

const Reviews = () => {
    return (
        <div className="reviews">
            <motion.div className="reviews__rev"
                variants={yTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <h5 className="reviews__h5">Jamie Waters</h5>
                <span className="reviews__span">Boot Café Owner</span>
                <p className="reviews__p">I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying.</p>
                <div className="reviews__stars">
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
            <motion.div className="reviews__rev"
                variants={yTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
            >
                <h5 className="reviews__h5">Hidenori Izaki</h5>
                <span className="reviews__span">World Barista Championship</span>
                <p className="reviews__p">Unquestionably, the best coffee shop in the area! The atmosphere inside this coffee shop was very vibrant and relaxing.</p>
                <div className="reviews__stars">
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
            <motion.div className="reviews__rev"
                variants={yTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <h5 className="reviews__h5">Raul Rodas</h5>
                <span className="reviews__span">Coffee Expert</span>
                <p className="reviews__p">This coffee shop has it all. The ambiance, interior designs, good coffee, tasty foods, and fast wi-fi connection.
                    It is simply one of the best and my favorites coffee shop in town.</p>
                <div className="reviews__stars">
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
    )
}

export default Reviews;