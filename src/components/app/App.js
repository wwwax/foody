import Header from "../header/Header";
import Menu from "../menu/Menu";
import OrderHistory from "../order-history/OrderHistory";

function App() {
    return (
        <div>
            <Header />
            <hr />
            <OrderHistory />
            <hr />
            <Menu />
        </div>
    );
}

export default App;
