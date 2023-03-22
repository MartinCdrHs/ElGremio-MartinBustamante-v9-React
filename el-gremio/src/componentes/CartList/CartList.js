import "./CartList.scss"

import { useContext } from "react"
import { FaTrashAlt } from "react-icons/fa";


import { CartContext } from "../../Context/CartContext"





const CartList = () => {

    const {cart, removeCart} = useContext(CartContext)

    return (

        <div className="cart-container">
            {
                cart.map ((juego)=>(
                    <div className="cart-item" key={juego.id}  >
                        <img src={juego.imagen} alt={juego.nombre} className="cart-img" id="cart-img"/>
                        <p className="cart-nombre" id="cart-nombre">{juego.nombre} </p>
                        <p className="cart-cant" id="cart-cant">Cantidad: {juego.cantidad}</p>
                        <p className="cart-precio" id="cart-precio">Precio: ${juego.precio * juego.cantidad}</p>
                
                        <button className="cart-borrar" id="cart-borrar" onClick={()=> removeCart(juego.id)}>
                            <FaTrashAlt/>
                        </button>
                     </div>
                ))
            }
        </div>

    )
} 

export default CartList