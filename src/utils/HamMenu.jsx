


const HamMenu = () => {
    return (
        <div className="w-full sm:h-[3.5rem] h-[3.2rem] fixed z-50 flex justify-center -bottom-1 lg:hidden" id="hamMenu">
            <div className="sm:w-[25rem] xs:w-[23rem] w-full backdrop-blur-3xl bg-[rgba(255,255,255,.1)] xs:border-2 border-t-2 rounded-t-lg flex justify-center items-center gap-5">
                <a href="#home" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-house sm:text-[1.6rem] text-[1.3rem]"></i>
                </a>
                <a href="#coffee" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-mug-hot sm:text-[1.6rem] text-[1.3rem]"></i>
                </a>
                <a href="#bakery" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-stroopwafel text-[1.5rem] text-[1.3rem]"></i>
                </a>
                <a href="#story" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-film text-[1.5rem] text-[1.3rem]"></i>
                </a>
                <a href="#visit" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-location-dot text-[1.5rem] text-[1.3rem]"></i>
                </a>
                <a href="#order" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-store text-[1.5rem] text-[1.3rem]"></i>
                </a>
                <a href="#contact" className="flex items-center text-white hover:scale-125 transition-all duration-200">
                    <i className="fa-solid fa-paper-plane text-[1.5rem] text-[1.3rem]"></i>
                </a>
            </div>
        </div>
    )
}

export default HamMenu;