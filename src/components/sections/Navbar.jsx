const Navbar = () => {
    return (
        <div className="flex items-center font-ubuntu">
            <ul className="flex ul-navbar">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#coffee">Coffee</a>
                </li>
                <li>
                    <a href="#bakery">Bakery</a>
                </li>
                <li>
                    <a href="#story">Story</a>
                </li>
                <li>
                    <a href="#visit">Visit</a>
                </li>
                <li>
                    <a href="#order">Order</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;