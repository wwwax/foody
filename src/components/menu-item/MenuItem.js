function MenuItem({ image, name, price, deleteMenuItem, getMoreMenuItemInfo }) {
    return (
        <div className='menu-item'>
            <img width='128' height='100' src={image} alt={name} />
            <h3>{name}</h3>
            <h4>{price}$</h4>

            <div className='menu-item__actions'>
                <button onClick={getMoreMenuItemInfo}>show more</button>
                <button onClick={deleteMenuItem}>delete</button>
            </div>
        </div>
    );
}

export default MenuItem;
