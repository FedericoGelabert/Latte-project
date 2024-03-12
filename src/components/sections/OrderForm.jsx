import { useEffect, useState, useRef } from "react"
import OrderEmail from "./OrderEmail"
import { motion } from "framer-motion";
import { opacityTransition } from "../../utils/transitions";
import emailjs from '@emailjs/browser';

const OrderForm = () => {

    const [latteId, activeLatteId] = useState(false)
    const [items, setItems] = useState([])
    const [itemsSelected, setItemsSelected] = useState([])
    const [orderEmail, activeOrderEmail] = useState(false)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [latteid, setLatteid] = useState("")
    const form = useRef();

    const getItemsSelected = () => {

        let str = "";
        itemsSelected.map((item) => {
            str += `(x1) ${item.name} <br>`;
        });
        return str;

    }



    const goOrderEmail = (e) => {
        e.preventDefault()

        let itemsStringify = getItemsSelected()

        var templateParams = {
            user_name: name,
            user_surname: surname,
            user_email: email,
            to_email: email,
            user_phonenumber: phonenumber,
            user_latteid: latteid,
            order_details : itemsStringify
        };

        emailjs
            .send('service_ah1ablj', 'template_mvqjop4', templateParams, {
                publicKey: '8mgbg1GDLdid-0-Xj'
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        if (orderEmail === false) {
            activeOrderEmail(true)
        }
    }


    const functionLatteId = () => {
        if (latteId === false) {
            activeLatteId(true)
        } else {
            activeLatteId(false)
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
                    <motion.div className="w-screen xl:h-screen relative font-ubuntu flex items-center justify-center xl:mt-0 mt-48 xl:pb-0 pt-6" id="orderForm"
                        variants={opacityTransition}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
                            <div className="lg:px-16 sm:px-8 px-4 mt-12 bg-[rgba(10,57,52,.89)] lg:w-[50rem] 3xl:w-[60rem] w-11/12 3xl:pb-12 pb-6 rounded-3xl relative shadow-xl shadow-black">
                                <form ref={form} className="3xl:mt-12 mt-6">
                                    <h2 className="text-latte-gray 3xl:text-[2.5rem] text-[1.5rem] mb-5 3xl:mt-10 mt-0 sm:pl-0 pl-6">Order Form</h2>
                                    <div className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-around gap-5 mb-5">
                                        <input type="text" placeholder="Name" required className="w-10/12 lg:w-[20rem] 3xl:p-3 p-1 bg-inherit border-b-2 focus:bg-[#f3f3ed] focus:text-black" name="name" id="user_name" value={name} onChange={e => setName(e.target.value)} />
                                        <input type="text" placeholder="Surname" required className="w-10/12 lg:w-[20rem] 3xl:p-3 p-1 bg-inherit border-b-2 focus:bg-[#f3f3ed] focus:text-black" name="user_surname" id="user_surname" value={surname} onChange={e => setSurname(e.target.value)} />
                                    </div>
                                    <div className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-around lg:mt-6 mt-0 gap-5">
                                        <input type="email" placeholder="Email" required className="w-10/12 lg:w-[20rem] 3xl:p-3 p-1 bg-inherit border-b-2 focus:bg-[#f3f3ed] focus:text-black" name="user_email" value={email} id="user_email" onChange={e => setEmail(e.target.value)} />
                                        <input type="text" placeholder="Phone Numer" required className="w-10/12 lg:w-[20rem] 3xl:p-3 p-1 bg-inherit border-b-2 focus:bg-[#f3f3ed] focus:text-black" name="user_phonenumber" value={phonenumber} id="user_phonenumber" onChange={e => setPhonenumber(e.target.value)} />
                                    </div>
                                    <div className="w-full flex sm:flex-row flex-col mt-6 items-center md:h-10 3xl:h-12 xs:h-32 h-40 sm:pl-0 pl-12">
                                        <div className="sm:w-[25rem] sm:pl-12 pl-0 px-5">
                                            <input type="checkbox" className="w-4 h-4 accent-[rgba(223,219,182,.9)] " onClick={functionLatteId} />
                                            <p className="inline 3xl:p-3 p-2 w-full">I'm a Latte premium member.</p>
                                        </div>
                                        <div className="sm:w-[20rem] w-full h-[3rem]">
                                            {
                                                latteId ?
                                                    <input type="password" placeholder="Latte ID" className="3xl:p-3 p-1 bg-inherit border-b-2 sm:mt-0 mt-5 sm:w-[10rem] w-10/12 focus:bg-[#f3f3ed] focus:text-black" maxLength={6} id="latteIdInput" name="user_latteid" value={latteid} onChange={e => setLatteid(e.target.value)} />
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </div>
                                    <p className="mt-2 ml-4">All available products</p>
                                    <div className="w-full 3xl:h-[9.8rem] h-[8.2rem] flex rounded-t-lg border-2 border-white overflow-auto overflow-y-hidden ">
                                        <div className="flex">
                                            <div className="flex">
                                                {items.map((item) => {
                                                    return (
                                                        <div className="bg-[rgba(223,219,182,.9)] 3xl:min-w-[8rem] min-w-[6rem] 3xl:h-[7.6rem] h-[6rem] m-2 rounded-2xl text-black p-2 flex flex-col items-center justify-center cursor-pointer hover:border-2 border-white" data-name={item.name} data-src={item.src} data-alt={item.alt} id="item" key={item.id} onClick={addItem}>
                                                            <div className="w-16 flex justify-center h-[70%]" data-name={item.name} data-src={item.src} data-alt={item.alt} >
                                                                <img src={item.src} alt={item.alt} className="object-contain" data-name={item.name} data-src={item.src} data-alt={item.alt} />
                                                            </div>
                                                            <div className="flex justify-center items-center w-full h-[30%]" data-name={item.name} data-src={item.src} data-alt={item.alt}>
                                                                <h4 data-name={item.name} data-src={item.src} data-alt={item.alt} className="3xl:text-[1rem] text-[0.71rem] font-semibold 3xl:font-light"> {item.name} </h4>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-5 ml-4">My products</p>
                                    <div className="w-full 3xl:h-[9.8rem] h-[8.2rem] flex rounded-t-lg border-2 border-white overflow-auto overflow-y-hidden">
                                        <div className="flex">
                                            {itemsSelected.map((itemSelected, index) => {
                                                return (
                                                    <div className="bg-[rgba(223,219,182,.9)] 3xl:min-w-[8rem] min-w-[6rem] 3xl:h-[7.6rem] h-[6rem] m-2 rounded-2xl text-black p-2 flex flex-col items-center justify-center relative" key={index} name="order_details">
                                                        <i className="fa-solid fa-xmark absolute top-0 right-0 z-50 pt-2 pr-3 cursor-pointer" id="mark-icon" onClick={() => removeItem(index)}></i>
                                                        <div className="w-16 flex justify-center h-[70%]">
                                                            <img src={itemSelected.src} alt={itemSelected.alt} className="object-contain p-1" />
                                                        </div>
                                                        <div className="flex justify-center items-center w-full h-[30%] ">
                                                            <h4 className="3xl:text-[1rem] text-[0.75rem] font-semibold 3xl:font-light">{itemSelected.name}</h4>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* <p className="text-gray-400">Add a product by clicking on it.</p> */}
                                    </div>
                                    <div className="w-full flex justify-center items-center mt-2 flex-col text-center">
                                        <p className="3xl:text-xs text-[0.6rem] text-red-500">* By submitting this form you will recieve an email with your selected products, a link to enter your personal address and the checkout.</p>
                                        <input type="submit" value="Send" className="cursor-pointer lg:w-6/12 sm:w-8/12 w-10/12 text-white font-bold 3xl:px-12 px-8 3xl:py-3 py-2 mt-3 border-2 rounded-3xl hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300 transition-all" onClick={goOrderEmail} />
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