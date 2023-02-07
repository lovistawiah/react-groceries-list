import LineItem from "./LineItem"
import './ItemList.css'
const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul className="list">
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList