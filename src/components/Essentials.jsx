import { motion } from "framer-motion"
import { xTransition, yTransition } from "../utils/variants"


const Essentials = () => {

  return (
    <div className="essentials-container">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={xTransition}>Essentials</motion.h2>
      <div id="essentials" className="essentials">
        <div className="essentials__content">
          <motion.div className="essentials__coffee" initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} viewport={{ once: true }} variants={yTransition}>
            <img src="https://res.cloudinary.com/federicog/image/upload/v1678818119/Latte/istockphoto-1282706326-612x612-removebg-preview_dxteyd.png" alt="Coffee grains" />
          </motion.div>
          <p>+</p>
          <motion.div className="essentials__water" initial="hidden" whileInView="visible" transition={{ delay: 0.8 }} viewport={{ once: true }} variants={yTransition}>
            <img src="https://res.cloudinary.com/federicog/image/upload/v1678818092/Latte/bottle-water-natural-and-glass-vector-illustration-isolated-on-white-background-2BE61YD_jkeduh.png" alt="Water" />
          </motion.div>
          <p>=</p>
          <motion.div className="essentials__result" initial="hidden" whileInView="visible" transition={{ delay: 1.4 }} viewport={{ once: true }} variants={yTransition}>
            <img src="https://res.cloudinary.com/federicog/image/upload/v1678818466/Latte/coffee_ikbuwf.png" alt="Coffee" />
          </motion.div>
        </div>
        <motion.p className="essentials__p" initial="hidden" whileInView="visible" transition={{ delay: 1.8 }} viewport={{ once: true }} variants={yTransition}>Each coffee we offer requires a unique roast profile to create a cup with maximum aroma, acidity, body and flavor. By working <br />
          in a delicate balance of heat, time and artistry, our master roasters bring out these unique characteristics of each coffee bean.</motion.p>
      </div>
    </div>
  )
}

export default Essentials;