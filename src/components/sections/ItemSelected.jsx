
const ItemSelected = ({ itemSelected, itemsSelected, index }) => {

    const functionRemoveItem = () => {
    }

    return (
        <div className="bg-[rgba(223,219,182,.9)] min-w-[8rem] h-[7.6rem] m-2 rounded-2xl text-black p-2 flex flex-col items-center justify-center relative" key={index}>
            <i className="fa-solid fa-xmark absolute top-0 right-0 z-50 pt-2 pr-3 cursor-pointer" id="mark-icon" onClick={functionRemoveItem}></i>
            <div className="w-16 flex justify-center h-[70%]">
                <img src={itemSelected.src} alt={itemSelected.alt} className="object-contain" />
            </div>
            <div className="flex justify-center items-center w-full h-[30%] ">
                <h4>{itemSelected.name}</h4>
            </div>
        </div>
    )
}

export default ItemSelected;