import { useEffect, useState } from "react"
import OrderEmail from "./OrderEmail"
import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";

const OrderForm = () => {

    const [latteId, activeLatteId] = useState(false)
    const [items, setItems] = useState([])
    const [itemsSelected, setItemsSelected] = useState([])
    const [orderEmail, activeOrderEmail] = useState(false)
    const [valEmail, setValEmail] = useState(true)

    const functionLatteId = () => {
        if (latteId === false) {
            activeLatteId(true)
        } else {
            activeLatteId(false)
        }
    }

    const goOrderEmail = () => {
        if (orderEmail === false) {
            activeOrderEmail(true)
        }
    }

    const validateEmail = (e) => {

        if (e.target.value.includes("@")) {
            setValEmail(false)
        } else {
            setValEmail(true)
        }

    }

    const addItem = (item) => {

        setItemsSelected([...itemsSelected, { name: item.target.dataset.name, src: item.target.dataset.src }])

    }

    const removeItem = (index) => {

        let newArray = [...itemsSelected]
        newArray.splice(index, 1)
        setItemsSelected(newArray)
    }

    useEffect(() => {

        fetch('api/items.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setItems(data)
            })

    }, [])


    return (
        <div>
            {
                orderEmail ?
                    <div>
                        <OrderEmail />
                    </div> :
                    <motion.div className="w-screen h-screen relative font-ubuntu flex items-center justify-center xl:mt-0 mt-48 xl:mb-0 mb-48" id="orderForm"
                        variants={opacityTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
                            <div className="lg:px-16 sm:px-10 sm:px-8 px-4 mt-12 bg-[rgba(10,57,52,.89)] lg:w-[60rem] w-11/12 pb-12 rounded-3xl relative shadow-xl shadow-black">
                                <form>
                                    <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10 sm:pl-0 pl-6">Order Form</h2>
                                    <div className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-around gap-5 mb-5">
                                        <input type="text" placeholder="Name" required className="w-10/12 lg:w-[20rem] p-3 bg-inherit border-b-2 w-[20rem] focus:bg-[#f3f3ed] focus:text-black" />
                                        <input type="text" placeholder="Surname" required className="w-10/12 lg:w-[20rem] p-3 bg-inherit border-b-2 w-[20rem] focus:bg-[#f3f3ed] focus:text-black" />
                                    </div>
                                    <div className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-around lg:mt-6 mt-0 gap-5">
                                        <input type="email" placeholder="Email" required onChange={validateEmail} className="w-10/12 lg:w-[20rem] p-3 bg-inherit border-b-2 w-[20rem] focus:bg-[#f3f3ed] focus:text-black" />
                                        <input type="text" placeholder="Phone Numer" required className="w-10/12 lg:w-[20rem] p-3 bg-inherit border-b-2 w-[20rem] focus:bg-[#f3f3ed] focus:text-black" />
                                    </div>
                                    <div className="w-full flex sm:flex-row flex-col mt-6 items-center md:h-12 xs:h-32 h-40 sm:pl-0 pl-12">
                                        <div className="sm:w-[25rem] sm:pl-12 pl-0 px-5">
                                            <input type="checkbox" className="w-4 h-4 accent-[rgba(223,219,182,.9)] " onClick={functionLatteId} />
                                            <p className="inline p-3 w-full">I'm a Latte premium member.</p>
                                        </div>
                                        <div className="sm:w-[20rem] w-full h-[3rem]">
                                        {
                                            latteId ?
                                            <input type="password" placeholder="Latte ID" className="p-3 bg-inherit border-b-2 sm:mt-0 mt-5 sm:w-[10rem] w-10/12 focus:bg-[#f3f3ed] focus:text-black" maxLength={6} id="latteIdInput" />
                                            :
                                            ""
                                        }
                                        </div>
                                    </div>
                                    <p className="mt-2 ml-4">All available products</p>
                                    <div className="w-full h-[9.8rem] flex rounded-t-lg border-2 border-white overflow-auto overflow-y-hidden ">
                                        <div className="flex">
                                            <div className="flex">
                                                {items.map((item) => {
                                                    return (
                                                        <div className="bg-[rgba(223,219,182,.9)] min-w-[8rem] h-[7.6rem] m-2 rounded-2xl text-black p-2 flex flex-col items-center justify-center cursor-pointer hover:border-2 border-white" data-name={item.name} data-src={item.src} data-alt={item.alt} id="item" key={item.id} onClick={addItem}>
                                                            <div className="w-16 flex justify-center h-[70%]" data-name={item.name} data-src={item.src} data-alt={item.alt} >
                                                                <img src={item.src} alt={item.alt} className="object-contain" data-name={item.name} data-src={item.src} data-alt={item.alt} />
                                                            </div>
                                                            <div className="flex justify-center items-center w-full h-[30%]" data-name={item.name} data-src={item.src} data-alt={item.alt}>
                                                                <h4 data-name={item.name} data-src={item.src} data-alt={item.alt}> {item.name} </h4>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-5 ml-4">My products</p>
                                    <div className="w-full h-[9.8rem] flex rounded-t-lg border-2 border-white overflow-auto overflow-y-hidden">
                                        <div className="flex">
                                            {itemsSelected.map((itemSelected, index) => {
                                                return (
                                                    <div className="bg-[rgba(223,219,182,.9)] min-w-[8rem] h-[7.6rem] m-2 rounded-2xl text-black p-2 flex flex-col items-center justify-center relative" key={index}>
                                                        <i className="fa-solid fa-xmark absolute top-0 right-0 z-50 pt-2 pr-3 cursor-pointer" id="mark-icon" onClick={() => removeItem(index)}></i>
                                                        <div className="w-16 flex justify-center h-[70%]">
                                                            <img src={itemSelected.src} alt={itemSelected.alt} className="object-contain" />
                                                        </div>
                                                        <div className="flex justify-center items-center w-full h-[30%] ">
                                                            <h4>{itemSelected.name}</h4>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* <p className="text-gray-400">Add a product by clicking on it.</p> */}
                                    </div>
                                    <div className="w-full flex justify-center items-center mt-2 flex-col text-center">
                                        <p className="text-xs text-red-500">* By submitting this form you will recieve an email with your selected products, a link to enter your personal address and the checkout.</p>
                                        <button type="submit" disabled={valEmail} className="lg:w-6/12 sm:w-8/12 w-10/12 text-white font-bold px-12 py-3 mt-3 border-2 rounded-3xl hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300 transition-all" onClick={goOrderEmail}>Order Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
            }
        </div>
    )
}

export default OrderForm;