import MenuItem from '../menu-item/MenuItem';

function Menu({ menu }) {
    return (
        <div className="menu">
            <ul className="menu-grid">
                {menu.map((item) => (
                    <li key={item.id}>
                        <MenuItem menuItem={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
