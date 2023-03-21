import { motion } from "framer-motion";
import { yTransition } from "../utils/variants";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__content">
                <motion.h2 variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>Menu</motion.h2>
                <motion.p variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    View our Full Menu of Coffee & Bakery
                </motion.p>
                <motion.a href="#home" variants={yTransition} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay: 0.7}}>
                    <button className="menu__button">Click Here</button>
                </motion.a>
            </div>
        </div>
    )
}

export default Menu