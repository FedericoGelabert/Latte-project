import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="header">
            <motion.div className="header__icon" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <a href="#home">
                    <img src="https://res.cloudinary.com/federicog/image/upload/v1678910074/Latte/latte-logo_ufoxy6.png" alt="" />
                </a>
            </motion.div>
            <Navbar />
        </div>
    )
}

export default Header;