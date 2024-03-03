import CoffeeStepper from "../../utils/CoffeeStepper";

const CoffeeProcess = () => {
  return (
    <div className="xl:w-screen xl:h-screen relative font-ubuntu flex items-center justify-center" id="coffee">
      <img src="coffee-package.webp" alt="Coffee Package" className="z-40 w-0 xl:w-[20rem] 2xl:w-[25rem] 3xl:w-[26rem] rotate-6 3xl:mr-24 xl:ml-24 ml-0 mr-9"/>
      <div className="flex items-center justify-center flex-col text-white z-30">
        <div className="px-16 pb-12 bg-[rgba(10,57,52,.89)] w-10/12 3xl:w-[70rem] h-3/6 rounded-3xl relative shadow-xl shadow-black">
          <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10">Coffee Process</h2>
          <CoffeeStepper/>
          <p className="text-lg pt-24 tracking-normal w-full">
            Each coffee we offer requires a unique roast profile to create a cup with maximum aroma, acidity, body and flavor. By working
            in a delicate balance of heat, time and artistry, our master roasters bring out these unique characteristics of each coffee bean.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoffeeProcess;