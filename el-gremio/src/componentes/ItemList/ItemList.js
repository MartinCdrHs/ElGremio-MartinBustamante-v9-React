import Item from "../Item/Item"

const ItemList = ( {items} ) => {

    return (
        <div className="grid-juegos">
            {items.map((juego)=> <Item key={juego.id} item={juego}/> )}
        </div>
    )
} 

export default ItemList