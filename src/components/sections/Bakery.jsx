import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const Bakery = () => {
  return (
    <div className="h-full xl:w-screen relative flex flex-col items-center justify-end xl:pt-0 pt-[40rem]" id="bakery">
                <div className="bg-[rgba(223,219,182,.9)] mb-24 sm:w-[20rem] lg:w-[0rem] xs:w-[20rem] w-[18rem] pr-[6rem] lg:h-0 h-[5rem] flex justify-center items-center lg:py-0 py-5 rounded-3xl relative">
                    <h2 className="text-gray-700 lg:text-[0rem] sm:text-[2.5rem] text-[2.2rem] font-semibold">Bakery</h2>
                    <img src="choco-donut.webp" alt="Chocolate Donut" className="absolute xs:w-32 w-[7rem] xs:ml-[20rem] lg:w-0 lg:ml-[0rem] ml-[16rem] -rotate-12" />
                </div>
      <div className="flex items-center justify-center w-full h-4/6 z-30 flex-wrap gap-12 ">
        <div>
          <div className="3xl:w-[28rem] xs:w-[22rem] w-[20rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] xs:w-[20rem] w-[18rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="macarons.webp" alt="Macarons" className="drop-shadow-2xl absolute 3xl:w-[21rem] xs:w-[17rem] w-[15rem] hover:w-[19rem] 3xl:hover:w-[23rem] hover:duration-400 transition-all"
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
          <div className="3xl:w-[28rem] xs:w-[22rem] w-[20rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] xs:w-[20rem] w-[18rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="apple-pie.webp" alt="Apple Pie" className="drop-shadow-2xl absolute 3xl:w-[21rem] xs:w-[17rem] w-[15rem] hover:w-[19rem] 3xl:hover:w-[23rem] hover:duration-400 transition-all"
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
          <div className="3xl:w-[28rem] xs:w-[22rem] w-[20rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] xs:w-[20rem] w-[18rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="croissant.webp" alt="Croissant" className="drop-shadow-2xl absolute 3xl:w-[23rem] xs:w-[17rem] w-[15rem] hover:w-[19rem] 3xl:hover:w-[25rem] hover:duration-400 transition-all"
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
          <div className="3xl:w-[28rem] xs:w-[22rem] w-[20rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] xs:w-[20rem] w-[18rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="pudding.webp" alt="Pudding" className="drop-shadow-2xl absolute 3xl:w-[20rem] xs:w-[16rem] w-[14rem] hover:w-[18rem] 3xl:hover:w-[22rem] hover:duration-400 transition-all"
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
          <div className="3xl:w-[28rem] xs:w-[22rem] w-[20rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] xs:w-[20rem] w-[18rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="chocolate-pancake.webp" alt="Chcolate Pancake" className="drop-shadow-2xl absolute 3xl:w-[19rem] xs:w-[15rem] w-[14rem] hover:w-[17rem] 3xl:hover:w-[21rem] hover:duration-400 transition-all"
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
          <div className="3xl:w-[28rem] xs:w-[22rem] w-[19rem] 3xl:h-[16rem] h-[13rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] 3xl:w-[26rem] xs:w-[20rem] w-[17rem] h-[11rem] 3xl:h-[14rem] rounded-3xl relative"></div>
            <motion.img src="sandwich.webp" alt="Sandwich" className="drop-shadow-2xl absolute 3xl:w-[20rem] xs:w-[16rem] w-[14rem] hover:w-[18rem] 3xl:hover:w-[22rem] hover:duration-400 transition-all"
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