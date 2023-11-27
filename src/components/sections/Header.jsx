import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="header__icon" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <a href="#header">
                    <img src="https://res.cloudinary.com/federicog/image/upload/v1678910074/Latte/latte-logo_ufoxy6.png" alt="" />
                </a>
            </div>
            <Navbar />
        </div>
    )
}

export default Header;