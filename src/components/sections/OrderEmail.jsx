import $ from 'jquery';
import { useEffect, useState } from 'react';

const OrderEmail = () => {
    const [status, setStatus] = useState(false)

    let phrases = [
        "Extracting the inherent goodness, enhancing quality and purity for maximum value.",
        "Culmination in preservation, as the perfected product is carefully packed for freshness and quality maintenance.",
        "From package to plate, ready for consumption, ensuring a delightful and satisfying experience."
    ];
    let i = 0;

    useEffect(() => {

        setInterval(function () {
            $('#processStatus').fadeOut(function () {
                $(this).html(phrases[i]).fadeIn();
                i++;
                // functionSendEmail()
            });
        }, 6000)
    })

    const functionSendEmail = () => {
        if (i === 4) {
            setStatus(true)
        }
    }


    return (
        <div>
            {
                status ? "" :
                    <div className="flex flex-col mb-32 w-full items-center">
                        <img src="coffee-shop.webp" alt="Latte Building" className='w-[32rem]' />
                        <div className='mt-12'>
                            <p id="processStatus" className="text-white">Seeds planted with precision, initiating the journey from soil to harvest.</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default OrderEmail;