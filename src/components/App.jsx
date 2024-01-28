import Main from "./sections/Main";
import About from "./sections/About";
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
        <About/>
      </div>
      <Quality/>
      <Coffee/>
      <Reviews/>
      <Bakery/>
      <Menu/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div> 
  )
}

export default App;