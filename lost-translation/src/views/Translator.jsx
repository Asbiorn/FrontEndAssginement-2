import { useState } from "react"
import TranslationsForm from "../components/Translations/TranslationsForm"
import OrdersCoffeeButton from "../components/Translations/OrdersCoffeeButton"
import withAuth from "../hoc/withAuth"
import TranslateQuery from "../components/Translations/TranslateQuery"

const COFFEES = [
    {
        id:1,
        name: "Americano",
        image: "img/signs/a.png"
    },
    {
        id:2,
        name: "Cappuccino",
        image: "img/cappuccino.png"
    },
    {
        id:3,
        name: "Latte",
        image: "img/latte.png"
    },
    {
        id:4,
        name: "Espresso",
        image: "img/espresso.png"
    },
]

const Orders = () => {

    const [coffee, setCoffee ] = useState(null)

    const handleCoffeeClicked = (coffeeId) => {
        setCoffee( COFFEES.find(coffee => coffee.id === coffeeId))
    }

    const availableCoffees = COFFEES.map(coffee => {
        return <OrdersCoffeeButton
        key={coffee.id}
        coffee={coffee}
        onSelect={handleCoffeeClicked} />
    })



    return (
    <>
        <h1>Translate</h1>

        <section id="TranslationQueryForm" >
            <TranslationsForm/>
        </section>
        <h4>Translation</h4>
        
        <section id="translation">
       

        </section>


        {coffee &&  <p>Selected coffee: {coffee.name }</p>  }

                <section id="coffee-options">
            {availableCoffees}

        </section>
       
    </>
    )
}



export default withAuth(Orders)  