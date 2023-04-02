import { Link } from "react-router-dom";
import "./CheckoutGreeting.scss"



const CheckoutGreeting = ({id}) => {


    return(
        <div className="padding-top">
               
            <h1 className="rojo-gremio">Un placer hacer negocios contigo!</h1>

            <h2>Ésta es el código de tu compra, no lo pierdas!</h2>

            <p  className="order-id">{id}</p>

            <Link to="/"> <button className="btn-inicio">Inicio</button></Link>

        </div>
    )

}

export default CheckoutGreeting;