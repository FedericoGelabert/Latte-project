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
    <div id="app">
      <div style={{scrollSnapAlign: "center"}}>
        <Header/>
      </div>
      <Main/>
      <div style={{scrollSnapAlign: "center"}}>
        <About/>
      </div>
      <div style={{scrollSnapAlign: "center"}}>
        <Quality/>
      </div>
      <div style={{scrollSnapAlign: "center"}}>
        <Coffee/>
      </div>
      <div style={{scrollSnapAlign: "center"}}>
        <Reviews/>
      </div>
      <div style={{scrollSnapAlign: "center"}}>
        <Bakery/>
      </div>
      <div style={{scrollSnapAlign: "center"}}>
        <Menu/>
      </div>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div> 
  )
}

export default App;