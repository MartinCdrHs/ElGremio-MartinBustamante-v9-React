import { useContext } from "react"
import { Link } from "react-router-dom";

import CartGreeting from "../CartGreeting/CartGreeting"
import CartList from "../CartList/CartList"
import TotalCompra from "../TotalCompra/TotalCompra"
import { CartContext } from "../../Context/CartContext"




export const Cart = ()=> {

    const {cart} = useContext(CartContext)

    
    
    return(

        cart.length === 0 
            ? <div>
                <CartGreeting/>
                <div className="bolsa-vacia">
                    No tienes productos en tu bolsa!
                </div>
                <Link to= "/"><button className="btn-cart">Seguir comprando</button></Link>
            </div>

        :<div>
            <CartGreeting/>
            <CartList/>
            <TotalCompra/>
        </div> 
    )

}