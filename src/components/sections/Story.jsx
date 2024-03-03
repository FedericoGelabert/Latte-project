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
        <div className="w-screen h-screen relative font-ubuntu flex items-center justify-center" id="story">
            <div className="w-full h-full flex items-center justify-center text-white z-30 relative">
                <div className="h-full flex items-center justify-center relative">
                    <motion.img src="coffee-pot.webp" alt="Logo" className="absolute z-40 mr-[45rem] w-[31rem] drop-shadow-2xl -rotate-6"
                        variants={opacityTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    />
                    <div className="w-[65rem] h-[32rem] bg-[rgba(10,57,52,.89)] flex justify-center items-center rounded-3xl relative ml-48">
                        <div className=" w-[63rem] h-[30rem] bg-[rgba(223,219,182,.9)] rounded-3xl relative pl-[22rem] pr-24">
                            <h2 className="text-gray-700 text-[2.5rem] mb-5 mt-5">Our <span id="story-words" className="underline">Story</span></h2>
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