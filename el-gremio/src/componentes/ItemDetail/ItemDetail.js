import "./ItemDetail.scss"

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Contador from "../Contador/Contador";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({item}) => {

    const {addCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState (1)



    const navigate = useNavigate()

    const handleVolver = ()=> {
        navigate(-1)
    }

    const handleAgregar = ()=> {
        const newItem = {
            ...item,
            cantidad
        }
        
        addCart(newItem)
    }
    

    

    return (
        <div className="caja-detalle">
            <p className="nombre-detalle" id="nombre">{item.nombre}</p>
            <img src={item.imagen} alt={item.nombre} className="img-detalle" id="img"/>
            <p className="desc-detalle" id="desc">{item.descripcion}</p>
            <p className="precio-detalle" id="precio">Precio: ${item.precio}</p>

            <Link><button onClick={handleVolver} className="volver-detalle" id="volver">Volver</button></Link>
            
            {
                isInCart(item.id)
                    ? <Link to="/cart"> <button className="a-la-bolsa">Ver mi Bolsa!</button> </Link>
                    : <Contador 
                        initial={1} 
                        stock={item.stock} 
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                      />
                
            }

            
                
        </div>
    )
}

export default ItemDetail;