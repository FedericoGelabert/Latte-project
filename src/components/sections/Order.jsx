import { useState } from "react";
import OrderForm from "./OrderForm";
import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const Order = () => {
  const [orderForm, activeOrderForm] = useState(false)

  const goOrderForm = () => {

    if (orderForm == false) {
      activeOrderForm(true)
    }

  }


  return (
    <div className="w-screen h-screen relative font-ubuntu flex flex-col items-center justify-center" id="order">
      {
        orderForm ?
          <div id="orderForm">
            <OrderForm />
          </div>
          :
          <div className="w-full h-full items-center justify-center flex flex-col text-white z-40 gap-10 mt-24 z-60" id="orderMain">
            <motion.img src="four-coffee.webp" alt="Four coffee" className="absolute w-56 z-50 top-0 ml-[40rem] mt-24"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
            <div className="px-16 py-8 bg-[rgba(10,57,52,.89)] w-7/12 h-[18rem] rounded-3xl relative shadow-xl shadow-black">
              <h2 className="text-latte-gray text-[2.5rem] mb-6">Enjoy our coffee!</h2>
              <p className="text-xl tracking-normal w-full">
                Welcome to our Order Section, where your coffee journey begins with a click. Explore our diverse range of meticulously curated coffee blends, crafted from the world's finest beans.
                Choose from our selection of single-origin delights, carefully roasted to perfection. Add artisanal bakery treats to complement your coffee experience.
              </p>
            </div>
            <div className="flex gap-8 w-full justify-center">
              <motion.div className="px-12 py-8 bg-[rgba(223,219,182,.9)] w-[22rem] h-[16rem] rounded-3xl relative shadow-xl shadow-black"
                variants={opacityTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-between pb-4">
                  <h4 className="text-2xl text-black">Global Reach</h4>
                  <img src="world-icon.webp" alt="World" className="w-11 h-11" />
                </div>
                <p className="text-[1.05rem] tracking-wide text-[rgba(56,65,64,0.89)]">
                  Our commitment extends beyond borders, offering a seamless and reliable international shipping service for our premium coffee.
                </p>
              </motion.div>
              <motion.div className="px-12 py-8 bg-[rgba(223,219,182,.9)] w-[22rem] h-[16rem] rounded-3xl relative shadow-xl shadow-black"
                variants={opacityTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between pb-4">
                  <h4 className="text-2xl text-black">Versatility</h4>
                  <img src="versatility.webp" alt="World" className="w-12 h-12" />
                </div>
                <p className="text-[1.05rem] tracking-normal text-[rgba(56,65,64,0.89)]">
                  Our coffee products are crafted to be versatile, accommodating various brewing methods and environments to ensure your satisfaction on the go.
                </p>
              </motion.div>
              <motion.div className="px-12 py-8 bg-[rgba(223,219,182,.9)] w-[22rem] h-[16rem] rounded-3xl relative shadow-xl shadow-black"
                variants={opacityTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between pb-4">
                  <h4 className="text-2xl text-black">Preference</h4>
                  <img src="quality.webp" alt="World" className="w-12 h-12" />
                </div>
                <p className="text-[1.05rem] tracking-wide text-[rgba(56,65,64,0.89)]">
                  Personalize your travel coffee experience with our diverse coffee varieties, ensuring that your cup aligns perfectly with your unique taste preferences.
                </p>
              </motion.div>
            </div>
            <motion.button onClick={goOrderForm} className="orderButtonAnimation text-white font-bold px-32 z-100 py-4 border-2 rounded-3xl flex items-center hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Start the order
            </motion.button>
          </div>
      }
    </div>
  )
}

export default Order;