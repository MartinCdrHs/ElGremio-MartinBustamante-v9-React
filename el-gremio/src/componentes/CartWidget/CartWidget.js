import "./CartWidget.scss"

import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../Context/CartContext";




const CartWidget = () => {

    const {totalCantidad, cart} = useContext(CartContext)


    if (cart.length === 0){
        return (
            <Link to="/cart" className="cart-widget">
            <button type="button" id="boton"><img src="./bolsa.png" alt="bolsa" className="icon-bolsa"/></button>
        </Link>
        )
    }

    
    
    return (
        <Link to="/cart" className="cart-widget">
            <button type="button" id="boton"><img src="./bolsa.png" alt="bolsa" className="icon-bolsa"/></button>
            <span className="contador">{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget;