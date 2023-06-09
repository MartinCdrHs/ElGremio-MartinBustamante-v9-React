import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"



import { db } from "../../firebase/config"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc( db, "juegos", itemId)

        getDoc(docRef)

            //eslint-disable-next-line

            .then((doc)=>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally (()=>{
                setLoading(false)
            })
        
    },[])

    

    return (
        loading
            ?<h2 className="loading"> Cargando ...</h2>
            :<ItemDetail item={item} />
    )
}

export default ItemDetailContainer