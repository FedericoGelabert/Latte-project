import OrderForm from "./OrderForm";


const Order = () => {


    return (
        <div className="w-screen h-screen relative font-ubuntu flex items-center justify-center" id="order">
        <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
          <div className="px-16 pb-12 bg-[rgba(10,57,52,.89)] w-10/12 h-[40%] rounded-3xl relative shadow-xl shadow-black">
            <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10">Our Coffee</h2>
            <p className="text-xl pb-10 tracking-normal w-full">
              In our stores we use single-origin coffee beans, carefully selected and roasted to highlight their natural flavors. Our state-of-the-art tools ensure perfect extraction, while our team of experts creates masterpieces in every cup.
            </p>
          </div>
        </div>
        {/* <img src="coffee2.webp" alt="Coffee" className="w-83 z-40 mr-36 rotate-6" /> */}
        <div className="hide">
            <OrderForm/>
        </div>
      </div>
    )
}

export default Order;