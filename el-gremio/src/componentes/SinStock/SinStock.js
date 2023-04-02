import "./SinStock.scss"

import { Link } from "react-router-dom";


const SinStock = (items) => {

    console.log(items)

    return(
        <div>
            <h1>Lo lamento Aventurero!</h1>
            <h2>Parece que ya no nos queda stock de: </h2>
            <p className="items-sin-stock"></p>
            <Link to="/"> <button className="btn-volver-carrito">Ir a la Bolsa</button></Link>
        </div>
    )

}

export default SinStock;