import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const OurCoffee = () => {
  return (
    <div className="w-screen h-screen relative font-ubuntu flex items-center justify-center" id="coffee">
      <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
        <div className="px-16 pb-12 bg-[rgba(10,57,52,.89)] w-10/12 h-[40%] rounded-3xl relative shadow-xl shadow-black">
          <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10">Our Coffee</h2>
          <p className="text-xl pb-10 tracking-normal w-full">
            In our stores we use single-origin coffee beans, carefully selected and roasted to highlight their natural flavors. Our state-of-the-art tools ensure perfect extraction, while our team of experts creates masterpieces in every cup.
          </p>
          <div className="flex gap-12 justify-center">
            <div>
              <div className="w-48 h-48 bg-[rgba(223,219,182,.9)] rounded-3xl flex items-center flex-col justify-center gap-5 text-black shadow-xl shadow-black hover:scale-105 transition-all">
                <motion.img src="milk.webp" alt="Milk" className="w-24"
                  variants={opacityTransition}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }} />
              </div>
            </div>
            <div className="w-48 h-48 bg-[rgba(223,219,182,.9)] rounded-3xl flex items-center flex-col justify-center gap-5 text-black shadow-xl shadow-black hover:scale-105 transition-all">
              <motion.img src="coffee-machine2.webp" alt="Coffee Machine" className="w-24"
                variants={opacityTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
            </div>
            <div className="w-48 h-48 bg-[rgba(223,219,182,.9)] rounded-3xl flex items-center flex-col justify-center gap-5 text-black shadow-xl shadow-black hover:scale-105 transition-all">
              <motion.img src="coffee-bag2.webp" alt="Coffee bag" className="w-[7rem]"
                variants={opacityTransition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
      <img src="coffee2.webp" alt="Coffee" className="w-83 z-40 mr-36 rotate-6" />
    </div>
  )
}

export default OurCoffee;