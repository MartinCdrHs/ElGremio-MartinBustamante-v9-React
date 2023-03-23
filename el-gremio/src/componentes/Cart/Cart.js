import "./Cart.scss"

import { useContext } from "react"

import CartGreeting from "../CartGreeting/CartGreeting"
import CartList from "../CartList/CartList"
import TotalCompra from "../TotalCompra/TotalCompra"
import { CartContext } from "../../Context/CartContext"




export const Cart = ()=> {

    const {cart} = useContext (CartContext)

    
    
    return(
        <div>
            <CartGreeting/>
            
                {/* if (cart.lenght = 0) {
                    <div className="bolsa-vacia">
                        No tienes productos en tu bolsa!
                    </div>
                }else {} */}
            <CartList/>

            <TotalCompra/>
        

        </div>
    )

}