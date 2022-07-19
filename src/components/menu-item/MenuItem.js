function MenuItem({ menuItem }) {
    return (
        <div className="menu-item">
            <img width="128" src={menuItem.image} alt={menuItem.name} />
            <h3>{menuItem.name}</h3>
            <h4>{menuItem.price}</h4>
        </div>
    );
}

export default MenuItem;
