import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { buscarDetalles } from "../../helpers/buscarJuegos"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        buscarDetalles(Number(itemId))
        .then((res)=>{
            setItem (res)
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