const Navbar = () => {
    return (
        <div className="navbar" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <ul className="navbar__ul">
                <li className="navbar__li">
                    <a href="#header">Home</a>
                </li>
                <li className="navbar__li">
                    <a href="#about">About</a>
                </li>
                <li className="navbar__li">
                    <a href="#coffee">Coffee</a>
                </li>
                <li className="navbar__li">
                    <a href="#bakery">Bakery</a>
                </li>
                <li className="navbar__li">
                    <a href="#gallery">Gallery</a>
                </li>
                <li className="navbar__li">
                    <a href="#contact">Contact</a>
                </li>
                <div className="navbar__fastlinks">
                    <a href="#">
                        <i class="fa-solid fa-location-dot"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;