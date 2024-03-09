import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const Contact = () => {
  return (
    <div className="w-screen h-screen relative font-ubuntu 3xl:pt-40 pt-0" id="contact">
      <div className="w-full h-full flex items-center flex-col justify-center">
        <motion.img src="coffee-shop.webp" alt="Coffee Shop" className="absolute 3xl:w-[28rem] 2xl:w-[22rem] sm:w-[22rem] xs:w-[20rem] w-[18rem] drop-shadow-2xl 3xl:mb-[38rem] 2xl:mb-[35rem] lg:mb-[34rem] sm:mb-[69rem] mb-[73rem] z-40"
          variants={opacityTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        />
        <div className="flex sm:justify-between justify-center lg:w-[50rem] sm:w-[30rem] w-11/12 h-[12rem] sm:items-start items-center py-12 bg-[rgba(223,219,182,.9)] rounded-3xl relative shadow-xl shadow-black mb-6 mt-48">
          <div className='lg:px-12 px-0 w-0 lg:w-6/12'>
            <p className="text-black lg:text-[1.1rem] text-[0rem]">Contact Us</p>
            <p className='text-gray-600 lg:text-[1rem] text-[0rem]'>info@latte.com</p>
            <p className='text-gray-600 lg:text-[1rem] text-[0rem]'>ideas@latte.com</p>
            <p className='text-gray-600 lg:text-[1rem] text-[0rem]'>issues@latte.com</p>
          </div>
          <div className='lg:px-12 px-12 lg:max-w-[20rem] w-full text-center'>
            <p className="text-black text-[1.1rem]">Visit Us</p>
            <p className='text-gray-600'>Our stores are open from 8am to 21pm. We make events on special days.</p>
          </div>
          <div className='lg:px-12 px-0 text-end'>
            <p className="text-black lg:text-[1.1rem] text-[0rem]">Contact Us</p>
            <p className='text-gray-600 lg:text-[1rem] text-[0rem]'>work@latte.com</p>
            <p className='text-gray-600 lg:text-[1rem] text-[0rem]'>letter@latte.com</p>
            <p className='text-gray-600 lg:text-[1rem] text-[0rem]'>reserve@latte.com</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center lg:w-[0rem] sm:w-[30rem] w-11/12 sm:h-[12rem] lg:h-[0rem] sm:items-start lg:py-0 py-12 bg-[rgba(223,219,182,.9)] rounded-3xl relative shadow-xl shadow-black mb-6">
          <div className='px-12 sm:text-start text-center'>
            <p className="text-black text-[1.1rem] lg:text-[0rem]">Contact Us</p>
            <p className='text-gray-600 text-[1rem] lg:text-[0rem]'>info@latte.com</p>
            <p className='text-gray-600 text-[1rem] lg:text-[0rem]'>ideas@latte.com</p>
            <p className='text-gray-600 text-[1rem] lg:text-[0rem]'>issues@latte.com</p>
            <p className='text-gray-600 sm:text-[0rem] lg:text-[0rem] text-[1rem]'>work@latte.com</p>
            <p className='text-gray-600 sm:text-[0rem] lg:text-[0rem] text-[1rem]'>letter@latte.com</p>
            <p className='text-gray-600 sm:text-[0rem] lg:text-[0rem] text-[1rem]'>reserve@latte.com</p>
          </div>
          <div className='px-12 sm:text-end text-start'>
            <p className="text-black sm:text-[1.1rem] text-[0rem]">Contact Us</p>
            <p className='text-gray-600 sm:text-[1rem] lg:text-[0rem] text-[0rem]'>work@latte.com</p>
            <p className='text-gray-600 sm:text-[1rem] lg:text-[0rem] text-[0rem]'>letter@latte.com</p>
            <p className='text-gray-600 sm:text-[1rem] lg:text-[0rem] text-[0rem]'>reserve@latte.com</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-5 lg:gap-0 lg:w-[50rem] sm:w-[30rem] w-11/12 lg:h-[12rem] items-center py-12 bg-[rgba(223,219,182,.9)] rounded-3xl relative shadow-xl shadow-black">
          <div className='px-12 text-center lg:text-start'>
            <p className="text-gray-500 text-md">Mexico Store</p>
            <p className="text-black text-[1.1rem]">Customer Support</p>
            <p className='text-gray-600'>+52 618 155 2012</p>
            <p className='text-gray-600'>+52 543 154 2011</p>
            <p className='text-gray-600'>+52 338 153 2010</p>
          </div>
          <motion.img src="logo-green.webp" alt="Logo" className="w-[10rem]"
            variants={opacityTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          />
          <div className='px-12 lg:text-end text-center'>
            <p className="text-gray-500 text-md">Uruguay Store</p>
            <p className="text-black text-[1.1rem]">Customer Support</p>
            <p className='text-gray-600'>+598 95 400 212</p>
            <p className='text-gray-600'>+598 96 534 211</p>
            <p className='text-gray-600'>+598 97 754 210</p>
          </div>
        </div>
        <div className="mt-12 flex gap-6 pb-32">
          <motion.a href="#"
            variants={opacityTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <i className="text-white fa-brands fa-facebook text-3xl hover:scale-110"></i>
          </motion.a>
          <motion.a href="#"
            variants={opacityTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <i className="text-white fa-brands fa-twitter text-3xl hover:scale-110"></i>
          </motion.a>
          <motion.a href="#"
            variants={opacityTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <i className="text-white fa-brands fa-whatsapp text-3xl hover:scale-110"></i>
          </motion.a>
          <motion.a href="#"
            variants={opacityTransition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <i className="text-white fa-brands fa-instagram text-3xl hover:scale-110"></i>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact;