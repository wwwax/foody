import Filter from "../filter/Filter";
import MenuItem from "../menu-item/MenuItem";

import menu from "../../json/menu.json";

function Menu() {
    console.log("menu :>> ", menu);
    return (
        <div className="menu">
            <Filter />

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
