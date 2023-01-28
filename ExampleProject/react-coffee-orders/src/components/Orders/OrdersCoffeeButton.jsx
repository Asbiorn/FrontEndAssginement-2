const OrdersCoffeeButton = ({name, image}) => {
return (
    <button> 
        <aside>
            <img src={image} alt={name} width="70"></img>
         </aside>
         <section>
            <b>{ name }</b>
         </section>
    </button>
)

}
export default OrdersCoffeeButton