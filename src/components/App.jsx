import Header from "./sections/Header";
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

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <About/>
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