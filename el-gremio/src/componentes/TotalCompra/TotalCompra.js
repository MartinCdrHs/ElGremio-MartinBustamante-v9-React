import "./TotalCompra.scss"

import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../Context/CartContext";



const TotalCompra = () => {

    const {totalCompra, vaciarCarrito} = useContext(CartContext)

    
    return (
        <div>

            
            <p className="total">El total de tu compra es de: ${totalCompra()}.-</p>

            <div>
                <Link to= "/board"><button className="btn-cart">Seguir comprando</button></Link>
                <button onClick={vaciarCarrito} className="btn-cart" >Vaciar Bolsa</button>
                <Link to= "/checkout"><button className="btn-cart">Cerrar compra</button></Link>
            </div>
            


    
        </div>
    )    
}

export default TotalCompra;