import { useEffect } from "react";
import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";
import $ from 'jquery';

const Story = () => {

    let words = ["Life", "Essence", "Birth"]
    let i = 0;

    useEffect(() => {

        setInterval(function () {
            $('#story-words').fadeOut(function () {
                $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
            });
        }, 4000)
    })

    return (
        <div className="w-screen h-screen relative font-ubuntu flex items-center justify-center mt-48" id="story">
            <div className="w-full h-full flex items-center justify-center text-white z-30 relative">
                <div className="h-full flex items-center justify-center relative">
                    <motion.img src="coffee-pot.webp" alt="Logo" className="absolute w-0 z-40 xl:mr-[45rem] 3xl:mr-[50rem] xl:w-[28rem] 3xl:w-[32rem] drop-shadow-2xl -rotate-6"
                        variants={opacityTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    />
                        <div className="w-11/12 xl:w-[65rem] md:h-[32rem] sm:h-[41rem] xs:h-[50rem] h-[58rem] py-3 bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative ml-0 xl:ml-32">
                            <div className="w-12/12 mx-5 xl:w-[63rem] 3xl:mr-4 md:h-[30rem] h-full bg-[rgba(223,219,182,.9)] rounded-3xl relative sm:px-12 px-6 xl:pl-[22rem] xl:px-0 xl:pr-12 md:pr-24 sm:pr-12 ">
                                <h2 className="text-gray-700 text-[2.5rem] my-5">Our <span id="story-words" className="underline">Story</span></h2>
                                <p className="text-xl pb-10 tracking-normal w-full text-black">
                                    In the aftermath of a financial crisis, a couple, Mia and Alex, decided to turn their passion for coffee into a business.
                                    Despite the challenges, they opened "Latte."<br /><br />
                                    Their slogan, "Bad times, good coffee," embodied their belief that amidst adversity, a comforting cup of coffee could bring solace and hope.
                                    Today, Latte stands as a symbol of resilience, serving not just coffee but a reminder that even in tough times, there's always comfort in a warm brew.
                                </p>
                                <button className="font-medium px-12 py-3 bg-[rgba(10,57,52,1)] text-white rounded-3xl flex items-center hover:bg-[rgba(223,219,182,.9)] hover:border hover:border-black  hover:text-black hover:scale-105 hover:duration-300 transition-all">
                                    Learn more about our story
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story;