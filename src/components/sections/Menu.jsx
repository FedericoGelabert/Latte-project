import { motion } from "framer-motion";
import { yTransition } from "../../utils/transitions";

const Menu = () => {
    return (
        <div className="font-ubu h-[500px] w-screen bg-black text-white flex justify-center items-center text-center bg-cover bg-no-repeat bg-black-b1 bg-blend-soft-light"
     style={{backgroundImage:'url(https://res.cloudinary.com/federicog/image/upload/v1679431867/Latte/menu-bg_cl86sc.jpg)'}}>
            <div className="container px-20">
                <motion.h2 className="text-[5rem] mb-0" variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>Menu</motion.h2>
                <motion.p className="text-2xl font-ubuntu mb-3" variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    View our Full Menu of Coffee & Bakery
                </motion.p>
                <motion.a className="font-ubuntu" href="#home" variants={yTransition} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay: 0.7}}>
                    <button className="text-white w-36 h-10 border-2 transition cursor-pointer font-semibold hover:bg-white hover:text-black">Click Here</button>
                </motion.a>
            </div>
        </div>
    )
}

export default Menu