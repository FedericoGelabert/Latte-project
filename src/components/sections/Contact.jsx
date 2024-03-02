import { motion } from "framer-motion";
import { yTransition, opacityTransition } from "../../utils/transitions";

const Contact = () => {
  return (
    <div className="w-screen h-screen relative font-ubuntu " id="contact">
      <div className="w-full h-full flex items-center flex-col justify-center">
        <motion.img src="coffee-shop.webp" alt="Coffee Shop" className="absolute w-[30rem] drop-shadow-2xl mb-[30rem] z-50"
          variants={opacityTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        />
        <div className="flex justify-between w-5/12 h-[12rem] items-start py-12 bg-[rgba(223,219,182,.9)] rounded-3xl relative shadow-xl shadow-black mb-6 mt-48">
          <div className='px-12'>
            <p className="text-black text-[1.1rem]">Contact Us</p>
            <p className='text-gray-600'>info@latte.com</p>
            <p className='text-gray-600'>ideas@latte.com</p>
            <p className='text-gray-600'>issues@latte.com</p>
          </div>
          <div className='px-12 max-w-[20rem] text-center'>
            <p className="text-black text-[1.1rem]">Visit Us</p>
            <p className='text-gray-600'>Our stores are open from 8am to 21pm. We make events on special days.</p>
          </div>
          <div className='px-12 text-end'>
            <p className="text-black text-[1.1rem]">Contact Us</p>
            <p className='text-gray-600'>work@latte.com</p>
            <p className='text-gray-600'>letter@latte.com</p>
            <p className='text-gray-600'>reserve@latte.com</p>
          </div>
        </div>
        <div className="flex justify-between w-5/12 h-[12rem] items-center bg-[rgba(223,219,182,.9)] rounded-3xl relative shadow-xl shadow-black">
          <div className='px-12'>
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
          <div className='px-12 text-end'>
            <p className="text-gray-500 text-md">Uruguay Store</p>
            <p className="text-black text-[1.1rem]">Customer Support</p>
            <p className='text-gray-600'>+598 95 400 212</p>
            <p className='text-gray-600'>+598 96 534 211</p>
            <p className='text-gray-600'>+598 97 754 210</p>
          </div>
        </div>
        <div className="mt-12 flex gap-6">
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
            <i class="text-white fa-brands fa-instagram text-3xl hover:scale-110"></i>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact;