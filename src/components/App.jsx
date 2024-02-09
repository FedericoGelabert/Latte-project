import Main from "./sections/Main";
import Bakery from "./sections/Bakery";
import CoffeeProcess from "./sections/CoffeeProcess";
import OurCoffee from "./sections/OurCoffee";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Reviews from "./sections/Reviews";
import Presentation from "./sections/Presentation";
import BackgroundVideo from '../utils/BackgroundVideo';
import Header from "./sections/Header";
import Story from "./sections/Story";
import Visit from "./sections/Visit";

function App() {
  return (
    <div className="snap-y snap-mandatory relative w-screen h-screen overflow-auto scroll-smooth">
      <BackgroundVideo />
      <Header />
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
      <Contact />
      <Footer />
    </div>
  )
}

export default App;