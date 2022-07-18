import orderHistory from "../../order-history.json";

function OrderHistory() {
    return (
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>price</th>
                    <th>delivery address</th>
                    <th>rating</th>
                </tr>
            </thead>

            <tbody>
                {orderHistory.map((item) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.price}</td>
                        <td>{item.address}</td>
                        <td>{item.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OrderHistory;
