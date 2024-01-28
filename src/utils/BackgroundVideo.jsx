

const BackgroundVideo = () => {
    return (
        <div className="w-screen h-screen fixed">
            {/* <div className="absolute w-full h-[100vh] z-20 bg-cover bg-center bg-no-repeat" style={{ 'background': 'linear-gradient(to right, black 5%, rgba(255, 255, 255,0))', 'backgroundColor': 'rgba(0,0,0,.3)' }}></div> */}
            <div className="absolute w-full h-[100vh] z-20 bg-cover bg-center bg-no-repeat" style={{'backgroundColor': 'rgba(0,0,0,.65)' }}></div>
            <div className="absolute w-full h-[100vh] z-10">
                <video className="w-full h-full object-cover" src="./main-lofi-video.mp4" loop autoPlay muted>
                </video>
            </div>
        </div>
    )
}

export default BackgroundVideo;