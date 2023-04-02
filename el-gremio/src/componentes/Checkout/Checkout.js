import "./Checkout.scss"

import { useContext, useState } from "react";
import {collection, addDoc, writeBatch, where, documentId, query, getDocs } from "firebase/firestore";
import { Navigate } from "react-router-dom";


import {db} from "../../firebase/config";
import FormGreeting from "../FormGreeting/FormGreeting";
import { CartContext } from "../../Context/CartContext";
import CheckoutGreeting from "../CheckoutGreeting/CheckoutGreeting";
import SinStock from "../SinStock/SinStock";






const Checkout = () => {

    const {cart, totalCompra, vaciarCarrito} = useContext (CartContext)

    const [orderId, setOrderId] = useState(null)

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

    const handleSubmit = async (e) => {
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

        const batch = writeBatch(db)
        const juegoRef = collection(db, "juegos")
        const ordenesRef = collection(db, "ordenes")

        const outOfStock = []

        const itemsRef = query (juegoRef, where(documentId(), "in", cart.map( prod => prod.id )))

        const response = await getDocs (itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find( prod => prod.id === doc.id)

            if(doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            }else{
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            });
        }else{

            // const sinStock = outOfStock.map((prod) => prod.nombre)

            return(
                <SinStock items= {outOfStock}/>
            )
        }
        
    }


    if(orderId) {
        return (
            <div>
                <CheckoutGreeting id={orderId}/>


            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to= "/"/>
    }
    

    return (
        <div>
            <FormGreeting/>

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

                <button className="btn-checkout" type="submit" onClick={handleSubmit}>Enviar</button>
            </div>

            

        </div>
    )

}

export default Checkout;