import  "./ItemListContainer.scss"
import {buscarJuegos} from "../../helpers/buscarJuegos"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import BoardGreeting from "../BoardGreeting/BoardGreeting"
import ItemFilter from "../ItemFilter/ItemFilter"

import { useParams } from "react-router-dom";




const ItemListContainer = () => {

    const [juegos, setJuegos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoria} = useParams()

    useEffect( ()=>{

        setLoading(true)

        buscarJuegos()
            .then((res)=>{
                if (!categoria){
                    setJuegos (res)
                }else{
                    setJuegos (res.filter((juego)=> juego.categoria === categoria))
                }
                    
            })
            .catch ((er)=>{
                console.error(er);
            })
            .finally(()=>{
                setLoading (false)
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

