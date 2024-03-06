import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const Bakery = () => {
  return (
    <div className="h-full w-screen relative flex flex-col items-center justify-end lg:pt-0 pt-24" id="bakery">
                <div className="bg-[rgba(223,219,182,.9)] mb-24 sm:w-[25rem] xs:w-[20rem] w-[18rem] pr-20 h-[5rem] flex justify-center items-center py-5 rounded-3xl relative">
                    <h2 className="text-gray-700 sm:text-[2.5rem] text-[1.8rem] pl-6">Bakery</h2>
                    <img src="choco-donut.webp" alt="Chocolate Donut" className="absolute xs:w-32 w-[7rem] xs:ml-[20rem] ml-[17rem] -rotate-12" />
                </div>
      <div className="flex items-center justify-center w-full h-4/6 z-30 flex-wrap gap-12 sm:mb-72">
        <div>
          <div className="3xl:w-[28rem] w-[22rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] w-[20rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="macarons.webp" alt="Macarons" className="drop-shadow-2xl absolute 3xl:w-[21rem] w-[17rem] hover:w-[19rem] 3xl:hover:w-[23rem] hover:duration-400 transition-all"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }} />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold">Macarons</p>
          </div>
        </div>
        <div>
          <div className="3xl:w-[28rem] w-[22rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] w-[20rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="apple-pie.webp" alt="Apple Pie" className="drop-shadow-2xl absolute 3xl:w-[21rem] w-[17rem] hover:w-[19rem] 3xl:hover:w-[23rem] hover:duration-400 transition-all"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.16 }} />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Apple Pie</p>
          </div>
        </div>
        <div>
          <div className="3xl:w-[28rem] w-[22rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] w-[20rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="croissant.webp" alt="Croissant" className="drop-shadow-2xl absolute 3xl:w-[23rem] w-[17rem] hover:w-[19rem] 3xl:hover:w-[25rem] hover:duration-400 transition-all"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.24 }} />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Croissant</p>
          </div>
        </div>
        <div >
          <div className="3xl:w-[28rem] w-[22rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] w-[20rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="pudding.webp" alt="Pudding" className="drop-shadow-2xl absolute 3xl:w-[20rem] w-[16rem] hover:w-[18rem] 3xl:hover:w-[22rem] hover:duration-400 transition-all"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.32 }} />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Pudding</p>
          </div>
        </div>
        <div>
          <div className="3xl:w-[28rem] w-[22rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] w-[20rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="chocolate-pancake.webp" alt="Chcolate Pancake" className="drop-shadow-2xl absolute 3xl:w-[19rem] w-[15rem] hover:w-[17rem] 3xl:hover:w-[21rem] hover:duration-400 transition-all"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }} />
          </div>
          <div className="w-[11rem] h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Chocolate Pancake</p>
          </div>
        </div>
        <div>
          <div className="3xl:w-[28rem] w-[22rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] w-[20rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="sandwich.webp" alt="Sandwich" className="drop-shadow-2xl absolute 3xl:w-[20rem] w-[16rem] hover:w-[18rem] 3xl:hover:w-[22rem] hover:duration-400 transition-all"
              variants={opacityTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.48 }} />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Sandwich</p>
          </div>
        </div>
      </div>
      <div className="h-[10rem] relative">
        <button className="text-white font-bold px-12 py-3 mt-12 border rounded-3xl flex items-center gap-2 hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300 transition-all">
          View full menu
        </button>
      </div>
    </div>
  )
}

export default Bakery;