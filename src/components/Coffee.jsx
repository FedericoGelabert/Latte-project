import { motion } from "framer-motion";
import { xTransition } from "../utils/variants";

const Coffee = () => {
  return (
    <div id="coffee" className='coffee'>
      <div className='coffee__content'>
        <motion.img src="https://res.cloudinary.com/federicog/image/upload/v1679077942/Latte/coffee-img1_mzcasa.jpg"
          alt="Latte Coffee"
          className="coffee__img1"
          variants={xTransition}
          whileInView={{ x: 0, opacity: 1, rotate: "4deg" }}
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />
        <motion.img src="https://res.cloudinary.com/federicog/image/upload/v1679078745/Latte/coffee-img2_g5aihu.png" 
        alt="Latte Coffee beans" 
        className="coffee__img2" 
        whileInView={{ x: 0, opacity: 1, rotate: "-4deg" }}
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        />
      </div>
      <div className="coffee__text">
        <motion.h2 variants={xTransition} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay: 0.2}}>Coffee</motion.h2>
        <motion.p variants={xTransition} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay: 0.2}}>
          Each coffee we offer requires a unique roast profile to create a cup with maximum aroma, acidity, body and flavor. By working
          in a delicate balance of heat, time and artistry, our master roasters bring out these unique characteristics of each coffee bean.
        </motion.p>
      </div>
    </div>
  )
}

export default Coffee;