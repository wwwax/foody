import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import * as API from '../../services/api';

class Menu extends React.Component {
    state = {
        menu: [],
    };

    componentDidMount() {
        API.getAllMenuItems().then((menu) => {
            this.setState({ menu });
        });
    }

    handleDeleteMenuItem = (id) => {
        API.deleteMenuItem(id).then((isOk) => {
            if (!isOk) return;

            this.setState((prev) => ({
                menu: prev.menu.filter((item) => item.id !== id),
            }));
        });
    };

    handleGetMoreMenuItemInfo = (id) => {
        API.getMenuItemById(id).then((id) => {
            console.log('id :>> ', id);
        });
    };

    handleAddNewItem = () => {
        const newItem = {
            name: 'hamburger snack burger gourmet',
            price: Math.floor(Math.random() * 100),
            image: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg',
        };

        API.addMenuItem(newItem).then((item) => {
            this.setState((prev) => ({
                menu: [...prev.menu, item],
            }));
        });
    };

    render() {
        const { menu } = this.state;

        return (
            <div className='menu'>
                <button onClick={this.handleAddNewItem}>add item</button>
                <ul className='menu-grid'>
                    {menu.map((item) => (
                        <li key={item.id}>
                            <MenuItem
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                deleteMenuItem={() =>
                                    this.handleDeleteMenuItem(item.id)
                                }
                                getMoreMenuItemInfo={() =>
                                    this.handleGetMoreMenuItemInfo(item.id)
                                }
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Menu;
