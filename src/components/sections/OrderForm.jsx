import { useState } from "react";
const latteIdInput = document.getElementById('latteIdInput')

const OrderForm = () => {

    const [latteId, activeLatteId] = useState(false)

    const functionLatteId = () => {
        if (latteId == false) {
            latteIdInput.classList.add('show')
            latteIdInput.classList.remove('hide')
            activeLatteId(true)
        } else if (latteId == true) {
            latteIdInput.classList.add('hide')
            latteIdInput.classList.remove('show')
            activeLatteId(false)
        }
    }


    return (
        <div className="w-screen h-screen relative font-ubuntu flex items-center justify-center" id="orderForm">
            <div className="w-full h-full flex items-center justify-center flex-col text-white z-30">
                <div className="px-16 mt-12 bg-[rgba(10,57,52,.89)] w-6/12 h-[82%] rounded-3xl relative shadow-xl shadow-black">
                    <form>
                        <h2 className="text-latte-gray text-[2.5rem] mb-5 mt-10">Order Form</h2>
                        <div className="w-full flex justify-around">
                            <input type="text" placeholder="Name" required className="p-3 bg-inherit border-b-2 w-[20rem]" />
                            <input type="text" placeholder="Surname" required className="p-3 bg-inherit border-b-2 w-[20rem]" />
                        </div>
                        <div className="w-full flex justify-around mt-6">
                            <input type="email" placeholder="Email" required className="p-3 bg-inherit border-b-2 w-[20rem]" />
                            <input type="text" placeholder="Phone Numer" required className="p-3 bg-inherit border-b-2 w-[20rem]" />
                        </div>
                        <div className="w-full flex mt-6 items-center h-12">
                            <div className="w-[20rem] pl-12">
                                <input type="checkbox" className="w-4 h-4 accent-[rgba(223,219,182,.9)]" onClick={functionLatteId} />
                                <p className="inline p-3">I'm a Latte premium member.</p>
                            </div>
                            <input type="password" placeholder="Latte ID" className="p-3 bg-inherit border-b-2 w-[10rem] hide" maxLength={6} id="latteIdInput" />
                        </div>
                        <p className="mt-6 ml-5">All available products</p>
                        <div className="w-full h-[9rem]  rounded-3xl border-2 border-white">

                        </div>
                        <p className="mt-5 ml-5">My products</p>
                        <div className="w-full h-[9rem] rounded-3xl border-2 border-white">

                        </div>
                        <div className="w-full flex justify-center mt-2">
                            <button className="w-6/12 text-white font-bold px-12 py-3 mt-6 border-2 rounded-3xl hover:bg-[rgba(10,57,52,1)] hover:scale-105 hover:duration-300 transition-all">Order Now</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <img src="coffee2.webp" alt="Coffee" className="w-83 z-40 mr-36 rotate-6" /> */}
        </div>
    )
}

export default OrderForm;