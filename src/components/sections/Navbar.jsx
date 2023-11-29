const Navbar = () => {
    return (
        <div className="flex items-center font-ubuntu" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <ul className="flex ul-navbar">
                <li>
                    <a href="#header">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#coffee">Coffee</a>
                </li>
                <li>
                    <a href="#bakery">Bakery</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <div className="fastlinks flex items-center">
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