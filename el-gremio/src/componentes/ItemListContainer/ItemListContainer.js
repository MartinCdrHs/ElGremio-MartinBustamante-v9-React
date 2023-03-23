import  "./ItemListContainer.scss"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList"
import BoardGreeting from "../BoardGreeting/BoardGreeting"
import ItemFilter from "../ItemFilter/ItemFilter"






const ItemListContainer = () => {

    const [juegos, setJuegos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoria} = useParams()

    useEffect( ()=>{

        setLoading(true)

        const juegosRef = collection (db, "juegos")

        const q = categoria
            ? query (juegosRef, where("categoria", "==", categoria))
            : juegosRef


        getDocs(q)
            .then( (res) => {
            
                const prods = res.docs.map( (doc)=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setJuegos(prods)
            })
            .finally( ()=> {
                setLoading(false)
            })

    }, [categoria])


    return (
        loading
            ? <div>
                <BoardGreeting/>
                <h2 className="loading"> Cargando ...</h2>
            </div> 
            : <div>
                <BoardGreeting/>
                <ItemFilter/>
                <ItemList items={juegos}/>
            </div>
    )
}

export default ItemListContainer;

