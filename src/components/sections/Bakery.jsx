const Bakery = () => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-end" id="bakery">
      <div className="flex items-center justify-center w-full h-4/6 z-30 flex-wrap">
        <div className="mx-12">
          <div className="w-96 h-56 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] w-[22rem] h-[12.5rem] rounded-3xl relative"></div>
            <img src="macarons.webp" alt="" className="drop-shadow-2xl absolute w-[19rem] hover:w-[21rem] hover:duration-400 transition-all" />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold">Macarons</p>
          </div>
        </div>
        <div className="mx-12">
          <div className="w-96 h-56 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] w-[22rem] h-[12.5rem] rounded-3xl relative"></div>
            <img src="apple-pie.webp" alt="" className="drop-shadow-2xl absolute w-[20rem] hover:w-[22rem] hover:duration-400 transition-all" />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Apple Pie</p>
          </div>
        </div>
        <div className="mx-12">
          <div className="w-96 h-56 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] w-[22rem] h-[12.5rem] rounded-3xl relative"></div>
            <img src="croissant.webp" alt="" className="drop-shadow-2xl absolute w-[20rem] hover:w-[22rem] hover:duration-400 transition-all" />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Croissant</p>
          </div>
        </div>
        <div className="mx-12">
          <div className="w-96 h-56 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] w-[22rem] h-[12.5rem] rounded-3xl relative"></div>
            <img src="pudding.webp" alt="" className="drop-shadow-2xl absolute w-[19rem] hover:w-[21rem] hover:duration-400 transition-all" />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Pudding</p>
          </div>
        </div>
        <div className="mx-12">
          <div className="w-96 h-56 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] w-[22rem] h-[12.5rem] rounded-3xl relative"></div>
            <img src="chocolate-pancake.webp" alt="" className="drop-shadow-2xl absolute w-[16rem] hover:w-[18rem] hover:duration-400 transition-all" />
          </div>
          <div className="w-[11rem] h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Chocolate Pancake</p>
          </div>
        </div>
        <div className="mx-12">
          <div className="w-96 h-56 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative">
            <div className="bg-[rgba(223,219,182,.9)] w-[22rem] h-[12.5rem] rounded-3xl relative"></div>
            <img src="sandwich.webp" alt="" className="drop-shadow-2xl absolute w-[18rem] hover:w-[20rem] hover:duration-400 transition-all" />
          </div>
          <div className="w-24 h-6 bg-[rgba(223,219,182,.9)] ml-5 flex justify-center items-center py-4 rounded-b-lg">
            <p className="font-semibold ">Sandwich</p>
          </div>
        </div>
      </div>
      <div className="h-[10rem]">
        <button className="text-white font-bold px-12 py-3 mt-6 border rounded-3xl flex items-center gap-2 hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300 transition-all">
          View full menu
        </button>
      </div>
    </div>
  )
}

export default Bakery;