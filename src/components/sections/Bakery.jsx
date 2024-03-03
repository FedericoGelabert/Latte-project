import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const Bakery = () => {
  return (
    <div className="xl:h-screen h-full w-full relative flex flex-col items-center justify-end" id="bakery">
      <div className="bg-[rgba(223,219,182,.9)] mb-24 xl:mb-0 w-[18rem] h-[5rem] xl:w-[0rem] xl:px-0 flex justify-start items-center rounded-3xl relative px-12">
        <h2 className="text-gray-700 text-[2.5rem] xl:text-[0rem]">Bakery</h2>
        <img src="choco-donut.webp" alt="" className="absolute w-32 xl:w-[0rem] ml-[9.5rem]" />
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
        <button className="text-white font-bold px-12 py-3 mt-6 border rounded-3xl flex items-center gap-2 hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300 transition-all">
          View full menu
        </button>
      </div>
    </div>
  )
}

export default Bakery;