import "./Checkout.scss"

import { useContext, useState } from "react";
import {collection, addDoc, writeBatch, where, documentId, query, getDocs } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import {Formik } from "formik";
import * as Yup from "yup";


import {db} from "../../firebase/config";
import FormGreeting from "../FormGreeting/FormGreeting";
import { CartContext } from "../../Context/CartContext";
import CheckoutGreeting from "../CheckoutGreeting/CheckoutGreeting";

const MySwal = withReactContent(Swal)


const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min(4, "Nombre demasiado corto")
                .max(25,"Nombre demasiado largo")
    ,
    direccion: Yup.string()
                .required("Este campo es obligatorio")
                .min(4, "Direccion demasiado corta")
                .max(30,"Direccion demasiado larga")
    ,
    correo: Yup.string()
                .required("Este campo es obligatorio")
                .email("El correo no es válido")
                .min(4, "Correo demasiado corto")
                .max(35,"Correo demasiado largo")
})



const Checkout = () => {

    const {cart, totalCompra, vaciarCarrito} = useContext (CartContext)

    const [orderId, setOrderId] = useState(null)

    

    const generarOrden = async (values) => {

        

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

                console.log(item.nombre);

                MySwal.fire({
                    title: 'Lo lamento Aventurero',
                    background: "#000000",
                    color: "#ffffff",
                    html: (
                        <div>
                            <p>Parece que ya no tenemos stock de </p>
                            {outOfStock.map((item) => (<p>{item.nombre}</p>))}
                        </div>  
                    ),
                    confirmButtonColor: "#cc0d0d",
                    confirmButtonText: 'Ir a la Bolsa'
                  }).then(() => {
                    window.location = "/cart"
                  })

            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            });
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
        return <Navigate to= "/board"/>
    }
    

    return (
        <div>
            <FormGreeting/>

            <Formik
                initialValues={{
                    nombre: "",
                    direccion: "",
                    correo: ""
                }}
                onSubmit={generarOrden}
                validationSchema={schema}
            >
                {({values, handleChange, handleSubmit, isSubmitting, errors}) => (
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
                            {errors.nombre && <p className="alert alert-danger">{errors.nombre}</p>}

                            <input
                                type={"text"}
                                placeholder= "Dirección"
                                className="form-control my-2 form"
                                value={values.direccion}
                                onChange= {handleChange}
                                name="direccion"
                            />
                            {errors.direccion && <p className="alert alert-danger">{errors.direccion}</p>}
        
                            <input
                                type={"email"}
                                placeholder= "Correo"
                                className="form-control my-2 form"
                                value={values.correo}
                                onChange= {handleChange}
                                name="correo"
                            />
                            {errors.correo && <p className="alert alert-danger">{errors.correo}</p>}

                            <button className="btn-checkout" type="submit" disabled={isSubmitting}>Enviar</button>
                        </form>
        
                        
                    </div>
                )}

            </Formik>

            

            

        </div>
    )

}

export default Checkout;