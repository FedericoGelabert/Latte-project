import { motion } from "framer-motion";
import { xTransition } from "../utils/variants";

const Bakery = () => {
  return (
    <div className="bakery" id="bakery">
      <div className="bakery__menu">
        <table className="bakery__table">
          <div className="bakery__theader">
            <motion.h2 variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>Bakery</motion.h2>
            <motion.hr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} />
          </div>
          <div style={{ paddingTop: 50 }}>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <td>Bagel</td>
              <td style={{ textAlign: "center" }}>$ 1.50</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <td>Cookies</td>
              <td style={{ textAlign: "center" }}>$ 2.00</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <td style={{ width: 250 }}>Croissant</td>
              <td style={{ textAlign: "center" }}>$ 2.50</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <td>Brownie</td>
              <td style={{ textAlign: "center" }}>$ 3.50</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.7 }}>
              <td>Chocolate Bread</td>
              <td style={{ textAlign: "center" }}>$ 4.50</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.8 }}>
              <td>Apple Pie Slice</td>
              <td style={{ textAlign: "center" }}>$ 5.00</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.9 }}>
              <td>Carrot Cake</td>
              <td style={{ textAlign: "center" }}>$ 5.50</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1 }}>
              <td>Tiramisu</td>
              <td style={{ textAlign: "center" }}>$ 6.00</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.1 }}>
              <td>Cheescake</td>
              <td style={{ textAlign: "center" }}>$ 6.50</td>
            </motion.tr>
            <motion.tr variants={xTransition} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.2 }}>
              <td>Lemon Pie</td>
              <td style={{ textAlign: "center" }}>$ 6.50</td>
            </motion.tr>
          </div>
        </table>
        <div className="bakery__img">
          <motion.img src="https://res.cloudinary.com/federicog/image/upload/v1679430434/Latte/Cookies_Cream_Baby_CC_montage_w2vecu.png"
            alt="Latte Cheescake"
            initial={{ x: 850, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Bakery;