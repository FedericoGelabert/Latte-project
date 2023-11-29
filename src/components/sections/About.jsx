const About = () => {
  return (
    <div id="about" className="h-screen w-screen relative bg-black ">
      <div className="container px-20">
        <div className="w-[600px] flex flex-col text-white">
          <h2 className="text-latte-gray text-[2.5rem] mb-8 font-ubuntu">
            About
          </h2>
          <p className="text-xl">
            Latte is a coffee company that was born from an idea by Ben Sekiro. He was a competent software developer who loved coffee. As coffee fan,
            he decided to start his own brand in 1967, with the name known today as Latte. With the simple objective of giving good quality at a good price.
            That is why we are one of the companies most chosen by critics and daily customers of our stores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;