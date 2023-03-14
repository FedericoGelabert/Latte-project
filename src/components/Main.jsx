import { motion } from "framer-motion";
import Header from "./Header";


const Main = () => {
    return (
        <div className="main">
            <Header />
            <div id="home" className="home">
                <div className="home__content">
                    <motion.h4
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ delay:0.2}}
                    >Bad times</motion.h4>
                    <motion.h2
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ delay: 0.70 }}
                    >Good Coffee</motion.h2>
                    <motion.p
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 1.3, stiffness: 600 }}
                    >The smell of coffee, of freshly roasted beans, is the best welcome that <br />
                        we plan to offer you every day when we open the doors of our stores.</motion.p>
                </div>
            </div>
        </div>
    )
}

export default Main;