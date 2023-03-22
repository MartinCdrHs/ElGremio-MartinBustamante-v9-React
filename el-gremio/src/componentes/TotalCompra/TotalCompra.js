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
                <Link to= "/"><button className="btn-cart">Seguir comprando</button></Link>
                <button onClick={vaciarCarrito} className="btn-cart" >Vaciar Bolsa</button>
            </div>
            


    
        </div>
    )    
}

export default TotalCompra;