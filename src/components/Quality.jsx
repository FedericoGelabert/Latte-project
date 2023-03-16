import { motion } from "framer-motion";
import { yTransition } from "../utils/variants";

const Quality = () => {
    return (
        <div className="quality">
            <motion.h2 variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>Quality</motion.h2>
            <motion.p variants={yTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }}>
                Each coffee we offer requires a unique roast profile to create a cup with maximum aroma, acidity, body and flavor. By working <br />
                in a delicate balance of heat, time and artistry, our master roasters bring out these unique characteristics of each coffee bean.
            </motion.p>
        </div>
    )
}

export default Quality;