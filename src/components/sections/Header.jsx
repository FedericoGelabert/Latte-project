import Navbar from "./Navbar";

const Header = () => {

    return (
            <div className="w-full flex justify-center h-[12vh] px-20 fixed z-50 sticky top-0 left-0" id="header">
                <div className="container flex justify-center items-center text-white">
                    <div className="font-semibold text-2xl" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                        {/* <a href="#header">
                        <img src="https://res.cloudinary.com/federicog/image/upload/v1678910074/Latte/latte-logo_ufoxy6.png" alt="Latte logo" className="w-28 h-10" />
                    </a> */}
                    </div>
                    <Navbar />
                </div>
            </div>
    )
}

export default Header;