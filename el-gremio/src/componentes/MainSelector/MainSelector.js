import "./MainSelector.scss"

import { Link } from "react-router-dom";



const MainSelector = () => {

    return (
        <div>
            <p id="int-selec">¡Alto ahí <span className="rojo-gremio">aventurero</span>! </p>

            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-6 hover-cont">
                        <figure className="figure">
                            <Link to="/taberna"><img src="./taberna.png" className="figure-img img-fluid rounded"
                                alt="Taberna"/></Link>
                            <figcaption className="figure-caption">¡No pensareis partir a vuestra aventura con el estómago vacío! ¡En <span
                                className="rojo-gremio">La Taberna</span> podráis disfrutar de nuestra comida!</figcaption>
                        </figure>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 hover-cont">
                        <figure className="figure">
                            <Link to= "/tablon"><img src="./tablon.png" className="figure-img img-fluid rounded"
                                alt="El Tablón"/></Link>
                            <figcaption className="figure-caption">Pasad por <span className="rojo-gremio">El Tablón</span> y elegid cual será
                            vuestra próxima gran aventura!</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSelector;