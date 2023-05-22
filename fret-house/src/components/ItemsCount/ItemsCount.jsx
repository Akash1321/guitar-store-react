import "./ItemsCount.css";

const ItemsCount = ({count}) => {
    return count > 0 ? (
        <div className="itemsCount">
            {count}
        </div>
    ): null;
}

export default ItemsCount;