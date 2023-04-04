import "./ItemFilter.scss"
import { Link } from "react-router-dom"


const ItemFilter = ()=> {

    return (
        <div className="caja-filtros">
            <Link to="/board/rol"> <button className="filtro">Rol</button> </Link> 
            <Link to="/board/cartas"> <button className="filtro">Cartas</button> </Link> 
            <Link to="/board/board"> <button className="filtro">Board</button> </Link> 
        </div>
    )
}

export default ItemFilter