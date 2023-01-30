const TranslateQuery = (queryString) => {
    let queryArray = queryString.split('')
    //console.log(queryArray)
    queryArray.forEach(j => { 
        return insertImage(j)
    });
 
       //translate buisiness logic
        // tag hver karakter af den mulige længde af strengen, og match med et billede og vis dette.
        // jeg kender hvert bogstav, og skal bare ændndre fil stigen tilsvarende.
        // lav det evt. til en funktion, så det følger temaet af genbrugelige funktioner.
        // lav begrænsninger på hvad folk kan indtaste i oversættelsen
 
}

const insertImage = (symbol) => {
    return (

        <aside>
        <img src={"img/signs/"+symbol+".png"} alt={symbol} width="70"></img>
        </aside>
    
    )

}

export default TranslateQuery