import { motion } from "framer-motion";
import { xTransition } from "../../utils/transitions";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__content">
        <div className="about__img-container">
          <motion.img src="https://res.cloudinary.com/federicog/image/upload/v1678991784/Latte/coffee-shop_aewzee.jpg"
            alt="Latte Coffee"
            className="about__img1"
            variants={xTransition}
            whileInView={{ x: 0, opacity: 1, rotate: "-8deg" }}
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />
          <motion.img src="https://res.cloudinary.com/federicog/image/upload/v1678994492/Latte/coffee-shop-img2_s7dyxj.jpg"
            alt="Latte Coffee"
            className="about__img2"
            variants={xTransition}
            whileInView={{ x: 0, opacity: 1, rotate: "4deg" }}
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
        </div>
        <div className="about__text">
          <motion.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            About
          </motion.h2>
          <motion.p whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            Latte is a coffee company that was born from an idea by Ben Sekiro. He was a competent software developer who loved coffee. As coffee fan,
            he decided to start his own brand in 1967, with the name known today as Latte. With the simple objective of giving good quality at a good price.
            That is why we are one of the companies most chosen by critics and daily customers of our stores.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About;