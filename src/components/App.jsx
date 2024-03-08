import Main from "./sections/Main";
import Bakery from "./sections/Bakery";
import CoffeeProcess from "./sections/CoffeeProcess";
import OurCoffee from "./sections/OurCoffee";
import Contact from "./sections/Contact";
import Reviews from "./sections/Reviews";
import Presentation from "./sections/Presentation";
import BackgroundVideo from '../utils/BackgroundVideo';
import Header from "./sections/Header";
import Story from "./sections/Story";
import Visit from "./sections/Visit";
import Order from "./sections/Order";
import HamMenu from "../utils/HamMenu";
import { useState } from "react";



function App() {

  const [menuActived, setMenuActived] = useState(false)


  return (
    <div className="xl:snap-y xl:snap-mandatory relative w-screen h-screen xl:overflow-auto scroll-smooth">
      <BackgroundVideo />
      <Header setMenuActived={setMenuActived} />
      {
        menuActived ?
          <HamMenu /> : ""
      }
      <div className="snap-center">
        <Presentation />
      </div>
      <div className="snap-center">
        <Main />
      </div>
      <div className="snap-center">
        <CoffeeProcess />
      </div>
      <div className="snap-center">
        <OurCoffee />
      </div>
      <div className="snap-center">
        <Bakery />
      </div>
      <div className="snap-center">
        <Story />
      </div>
      <div className="snap-center">
        <Reviews />
      </div>
      <div className="snap-center">
        <Visit />
      </div>
      <div className="snap-center">
        <Order />
      </div>
      <div className="snap-center">
        <Contact />
      </div>
    </div>
  )
}

export default App;