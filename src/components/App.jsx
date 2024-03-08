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
import $ from 'jquery';



function App() {

  const [menuActived, setMenuActived] = useState(false)
  const [headerActivated, setHeaderActivated] =useState(false)

  const allSections = document.getElementById('allSections')



  $(allSections).on('scroll', () => {

    const scroll = $('#allSections').scrollTop()

    if(scroll >= 600) {
      setHeaderActivated(true)
    } else if(scroll <= 600) {
      setHeaderActivated(false)
    }

  }) 


  return (
    <div className="xl:snap-y xl:snap-mandatory relative w-screen h-screen xl:overflow-auto scroll-smooth overflow-y-scroll" id="allSections">
      <BackgroundVideo />
      {
        headerActivated ?
        <Header setMenuActived={setMenuActived} /> : ""
      }
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