import Main from "./sections/Main";
import Bakery from "./sections/Bakery";
import Coffee from "./sections/Coffee";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Menu from "./sections/Menu";
import Quality from "./sections/Quality";
import Reviews from "./sections/Reviews";
import Presentation from "./sections/Presentation";
import BackgroundVideo from '../utils/BackgroundVideo';
import Header from "./sections/Header";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function App() {
  return (
    <div className="snap-y snap-mandatory relative w-screen h-screen overflow-auto scroll-smooth">
      <BackgroundVideo/>
      <Header/>
      <div className="snap-center">
        <Presentation/>
      </div>
      <div className="snap-center">
        <Main/>
      </div>
      <div className="snap-center">
        <Coffee/>
      </div>
      <div className="snap-center">
        <Bakery/> 
      </div>
      <div className="snap-center">
       <Reviews/>
      </div>
      <Quality/>
      <Menu/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div> 
  )
}

export default App;