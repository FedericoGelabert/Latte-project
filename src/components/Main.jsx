import { motion } from "framer-motion";
import Header from "./Header";
import { xTransition, opacityTransition } from "../utils/variants";


const Main = () => {
    return (
        <div className="main">
            <Header />
            <div id="home" className="home">
                <div className="home__content">
                    <motion.h4 animate="visible" initial="hidden" transition={{ delay: 0.2 }} variants={xTransition}>
                            Bad times
                        </motion.h4>
                    <motion.h2 animate="visible" initial="hidden" transition={{ delay: 0.70 }} variants={xTransition}>
                        Good Coffee
                    </motion.h2>
                    <motion.p animate="visible" initial="hidden" transition={{ delay: 1.3 }} variants={opacityTransition}>
                        The smell of coffee, of freshly roasted beans, is the best welcome that <br />
                        we plan to offer you every day when we open the doors of our stores.
                    </motion.p>
                </div>
            </div>
            <motion.div className="home__arrow" animate="visible" initial="hidden" transition={{ delay: 2, x: { duration: 1.5 } }} variants={opacityTransition}>
                <span></span>
                <span></span>
            </motion.div>
        </div>
    )
}

export default Main;