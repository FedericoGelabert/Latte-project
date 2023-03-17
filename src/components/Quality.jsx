import { motion } from "framer-motion";
import { yTransition } from "../utils/variants";

const Quality = () => {
    return (
        <div className="quality">
            <motion.h2 variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>Quality</motion.h2>
            <motion.p variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                From responsible cultivation to roasting, every detail in the artisanal preparation is essential to be able to enjoy a cup of Latte coffee. In addition <br />
                to the essence of the beans, we know that the way coffee is brewed has a surprising effect on the flavor of each cup and defines its body.
            </motion.p>
        </div>
    )
}

export default Quality;