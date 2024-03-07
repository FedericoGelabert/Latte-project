import $ from 'jquery';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const OrderEmail = () => {
    const [status, setStatus] = useState(false)

    let phrases = [
        "Enhancing quality and purity for maximum value.",
        "Crafting a symphony of aromas and textures.",
        "Ensuring a delightful and satisfying experience.",
        ""
    ];
    let i = 0;

    useEffect(() => {

        setInterval(function () {
            $('#processStatus').fadeOut(function () {
                $(this).html(phrases[i]).fadeIn();
                i++;
                functionSendEmail()
            });
        }, 6000)
    })

    const functionSendEmail = () => {
        if (i === 4) {
            setStatus(true)
        }
    }


    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            {
                status ?
                    <motion.div className="flex flex-col justify-center xs:w-[25rem] w-11/12 h-[12rem] items-center bg-[rgba(10,57,52,.89)] text-center rounded-3xl relative shadow-xl shadow-black"
                        variants={opacityTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <img src="email.webp" alt="Email sent" className='absolute w-32 mb-[12rem]' />
                        <div className='mt-8 px-12'>
                            <p className="text-white text-[1.1rem]">We just sent you an email.</p>
                            <span className='text-gray-500'>Check SPAM inbox.</span>
                        </div>
                    </motion.div>
                    :
                    <motion.div className="flex flex-col justify-center xs:w-[25rem] w-11/12 h-[12rem] items-center bg-[rgba(10,57,52,.89)] text-center rounded-3xl relative shadow-xl shadow-black"
                        variants={opacityTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <img src="loading.gif" alt="Loader" className='w-12 h-12' />
                        <div className='mt-3 px-12'>
                            <p id="processStatus" className="text-white text-[1.1rem]">Initiating the journey from soil to harvest.</p>
                        </div>
                    </motion.div>
            }
        </div>
    )
}

export default OrderEmail;