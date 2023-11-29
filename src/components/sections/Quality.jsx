import { motion } from "framer-motion";
import { yTransition } from "../../utils/transitions";

const Quality = () => {
    return (
        <div className="flex items-center h-[350px] w-full bg-cover bg-no-repeat bg-blend-soft-light bg-fixed text-white bg-black-b1"
            style={{ 'backgroundImage': 'url("https://res.cloudinary.com/federicog/image/upload/v1679077942/Latte/coffee-img1_mzcasa.jpg")' }}>
            <div className="container px-20 flex flex-col items-center justify-center">
                <motion.h2 className="text-6xl mb-5 text-latte-gray font-ubuntu"
                    variants={yTransition}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}>
                    Quality
                </motion.h2>
                <motion.p className="text-center text-xl" variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                    From responsible cultivation to roasting, every detail in the artisanal preparation is essential to be able to enjoy a cup of Latte coffee. In addition <br />
                    to the essence of the beans, we know that the way coffee is brewed has a surprising effect on the flavor of each cup and defines its body.
                </motion.p>
            </div>
        </div>
    )
}

export default Quality;