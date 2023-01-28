import OrdersForm from "../components/Orders/OrderForm"
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeeButton"
import withAuth from "../hoc/withAuth"

const Orders = () => {
    return (
    <>
        <h1>Orders</h1>
        <section id="coffee-options">
            <OrdersCoffeeButton name="Americano" image="img/americano.png" key="americano" />
            <OrdersCoffeeButton name="Latte" image="img/latte.png" key="latte" />
            <OrdersCoffeeButton name="Cappuccino" image="img/cappuccino.png" key="cappuccino" />
            <OrdersCoffeeButton name="Espresso" image="img/espresso.png" key="espresso" />
        </section>
        <section id="order-notes" placeholder="Extra syntactic sugar">
            <OrdersForm/>
        </section>
    </>
    )
}
export default withAuth(Orders)