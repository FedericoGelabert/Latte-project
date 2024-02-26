import ItemSelected from "./ItemSelected";

const ItemsSelectedList = ({ itemsSelected }) => {

    return (
        <div className="flex">
            {itemsSelected.map((itemSelected, index) => {
                return (
                    <ItemSelected itemSelected={itemSelected} itemsSelected={itemsSelected} key={index}/>
                )
            })}
        </div>
    )
}

export default ItemsSelectedList;