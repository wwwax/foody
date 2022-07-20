import React from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import OrderHistory from "../order-history/OrderHistory";
import Filter from "../filter/Filter";
import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";

import orderHistoryData from "../../json/order-history.json";
import menuData from "../../json/menu.json";

class App extends React.Component {
    state = {
        filter: "",
        orderHistory: orderHistoryData,
        menu: menuData,
    };

    handleFilterChange = (e) => {
        this.setState({
            filter: e.target.value,
        });
    };

    filterMenu = (menu, filter) => {
        return menu.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    render() {
        const { orderHistory, menu, filter } = this.state;

        const filteredMenu = this.filterMenu(menu, filter);

        return (
            <div>
                <Header />
                <hr />
                <SignIn />
                <hr />
                <SignUp />
                <hr />
                <OrderHistory orderHistory={orderHistory} />
                <hr />
                <Filter filter={filter} onChange={this.handleFilterChange} />
                <hr />
                <Menu menu={filteredMenu} />
            </div>
        );
    }
}

export default App;

// TODO
// - helper
