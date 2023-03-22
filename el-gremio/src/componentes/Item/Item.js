import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
        <div className="tarjeta" key={item.id}>
                <img src={item.imagen} alt={item.nombre} className="juego-img"/>
                <p className="juego-nombre">{item.nombre}</p>
                <span className="juego-precio">Precio: ${item.precio}</span>
                <Link to={`/detalles/${item.id}`}><button className="juegos-boton">Detalles</button></Link> 
        </div>
    )
}

export default Item;