import CoffeeStepper from "../../utils/CoffeeStepper";

const Coffee = () => {
  return (
    <div className="w-screen h-screen relative font-ubuntu flex items-center" id="coffee">
      <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
        <div className="px-20 bg-[rgba(10,57,52,.89)] w-8/12 h-3/6 rounded-3xl">
          <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10">Our Coffee</h2>
          <CoffeeStepper/>
          <p className="text-xl pt-24">
            Each coffee we offer requires a unique roast profile to create a cup with maximum aroma, acidity, body and flavor. By working
            in a delicate balance of heat, time and artistry, our master roasters bring out these unique characteristics of each coffee bean.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coffee;