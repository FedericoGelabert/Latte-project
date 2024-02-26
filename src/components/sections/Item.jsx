
const Item = ({ item, itemsSelected }) => {

    const functionPushItem = () => {
        itemsSelected.push(item)
    }

    return (
        <div className="bg-[rgba(223,219,182,.9)] min-w-[8rem] h-[7.6rem] m-2 rounded-2xl text-black p-2 flex flex-col items-center justify-center cursor-pointer hover:border-2 border-white" key={item.id} onClick={functionPushItem}>
            <div className="w-16 flex justify-center h-[70%]">
                <img src={item.src} alt={item.alt} className="object-contain" />
            </div>
            <div className="flex justify-center items-center w-full h-[30%]">
                <h4>{item.name}</h4>
            </div>
        </div>
    )
}

export default Item;