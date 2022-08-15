import { v4 } from 'uuid';
import NavItem from '../nav-item/NavItem';

const navItems = [
    { id: v4(), name: 'menu' },
    { id: v4(), name: 'about' },
    { id: v4(), name: 'contact' },
    { id: v4(), name: 'delivery' },
];

function Nav() {
    return (
        <ul className='Nav'>
            {navItems.map((item) => (
                <li key={item.id}>
                    <NavItem name={item.name} />
                </li>
            ))}
        </ul>
    );
}

export default Nav;
