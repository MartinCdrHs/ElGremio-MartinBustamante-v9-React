import "./MainSelector.scss"

import { Link } from "react-router-dom";



const MainSelector = () => {

    return (
        <div>
            <p id="int-selec">¡Alto ahí <span class="rojo-gremio">aventurero</span>! </p>

            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-12 col-md-6 hover-cont">
                        <figure class="figure">
                            <Link to="/taberna"><img src="./taberna.png" class="figure-img img-fluid rounded"
                                alt="Taberna"/></Link>
                            <figcaption class="figure-caption">¡No pensareis partir a vuestra aventura con el estómago vacío! ¡En <span
                                class="rojo-gremio">La Taberna</span> podráis disfrutar de nuestra comida!</figcaption>
                        </figure>
                    </div>
                    
                    <div class="col-sm-12 col-md-6 hover-cont">
                        <figure class="figure">
                            <Link to= "/tablon"><img src="./tablon.png" class="figure-img img-fluid rounded"
                                alt="El Tablón"/></Link>
                            <figcaption class="figure-caption">Pasad por <span class="rojo-gremio">El Tablón</span> y elegid cual será
                            vuestra próxima gran aventura!</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSelector;