import { useState } from "react";
import Navbar from "./Navbar";

const Header = ( {setMenuActived} ) => {

    const [audioStatus, setAudioStatus] = useState(false)
    const [menuStatus, setMenuStatus] = useState(false)

    const audioFunction = () => {

        const audioElement = document.getElementById('audio')
        if (audioStatus === false) {
            audioElement.play()
            setAudioStatus(true)
        } else if (audioStatus === true) {
            audioElement.pause()
            setAudioStatus(false)
        }

    }

    const menuFunction = () => {
        if(menuStatus === false) {
            setMenuStatus(true)
            setMenuActived(true)
        } else if(menuStatus === true) {
            setMenuStatus(false)
            setMenuActived(false)
        }
    }

    return (
        <div className="flex w-screen justify-center h-24 z-50 fixed mt-3 items-center" id="header">
            <audio src="/coffee-jazz-music.mp3" id="audio"></audio>
            <div className="container flex justify-center items-center text-white">
                <img src="logo-green.webp" alt="Logo" className="w-[4.5rem] absolute left-0 md:ml-[4.5rem] xs:ml-[3.5rem] ml-[2rem]" />
                <Navbar />
                <div className="absolute right-0 md:mr-[9rem] xs:mr-[6.8rem] mr-[4.5rem] flex items-center lg:hidden show" onClick={menuFunction}>
                    {
                        menuStatus ?
                            <i class="text-[2rem] fa-solid fa-xmark right-0 top-0"></i>
                            :
                            <i className="text-[2rem] fa-solid fa-bars right-0 top-0"></i>
                    }
                </div>
                <div onClick={audioFunction} className="flex h-full items-center">
                    {
                        audioStatus ?
                            <svg id="audioNotMuted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 absolute right-0 md:mr-[6.5rem] xs:mr-[4rem] mr-[2rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg> :
                            <svg id="audioMuted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="show w-8 h-8 absolute right-0 md:mr-[6.5rem] xs:mr-[4rem] mr-[2rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;