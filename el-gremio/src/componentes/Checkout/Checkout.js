import "./Checkout.scss"

import { useContext, useState } from "react";

import CheckoutGreeting from "../CheckoutGreeting/CheckoutGreeting";
import { CartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";




const Checkout = () => {

    const {cart, totalCompra} = useContext (CartContext)

    const [values, setValues] = useState ({
        nombre: "",
        direccion: "",
        correo: ""
    })

    const handleChange = (e) => {

        setValues({
            ...values,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.direccion.length < 5) {
            alert("Dirección inválido")
            return
        }
        if (values.correo.length < 5) {
            alert("Correo inválido")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, nombre: prod.nombre, cantidad: prod.cantidad, precio: prod.precio})),
            total: totalCompra(),

        }
    }

    if (cart.length === 0){

        return <Navigate to="/" />
    }
    

    return (
        <div>
            <CheckoutGreeting/>

            <div className="form-contenedor">
                <form onClick={handleSubmit}>

                    <input
                        type={"text"}
                        placeholder= "Nombre"
                        className="form-control my-2 form"
                        value={values.nombre}
                        onChange= {handleChange}
                        name= "nombre"
                    />

                    <input
                        type={"text"}
                        placeholder= "Dirección"
                        className="form-control my-2 form"
                        value={values.direccion}
                        onChange= {handleChange}
                        name="direccion"
                    />

                    <input
                        type={"email"}
                        placeholder= "Correo"
                        className="form-control my-2 form"
                        value={values.correo}
                        onChange= {handleChange}
                        name="correo"
                    />
                </form>

                <button className="btn-checkout" type="submit">Enviar</button>
            </div>

            

        </div>
    )

}

export default Checkout;