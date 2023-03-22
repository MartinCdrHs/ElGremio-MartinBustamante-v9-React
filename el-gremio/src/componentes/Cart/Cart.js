import "./Cart.scss"

import CartGreeting from "../CartGreeting/CartGreeting"
import CartList from "../CartList/CartList"
import TotalCompra from "../TotalCompra/TotalCompra"




export const Cart = ()=> {

    
    
    return(
        <div>
            <CartGreeting/>

            <CartList/>

            <TotalCompra/>

        </div>
    )

}