import { motion } from "framer-motion";

const Navbar = () => {
    return (
            <motion.div className="navbar" initial={{ y: -100, opacity: 0 }} animate={{ y:0, opacity: 1}}>
                <ul className="navbar__ul">
                    <li className="navbar__li">
                        <a href="#home">Home</a>
                    </li>
                    <li className="navbar__li">
                        <a href="#essentials">Essentials</a>
                    </li>
                    <li className="navbar__li">
                        <a href="#about">About</a>
                    </li>
                    <li className="navbar__li">
                        <a href="#products">Products</a>
                    </li>
                    <li className="navbar__li">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </motion.div>
    )
}

export default Navbar;