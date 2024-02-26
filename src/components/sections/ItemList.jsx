import Item from "./Item";

const ItemList = ({ items, itemsSelected }) => {

    return (
        <div className="flex">
            {items.map((item) => {
                return (
                    <Item item={item} itemsSelected={itemsSelected} key={item.id}/>
                )
            })}
        </div>
    )
}

export default ItemList;