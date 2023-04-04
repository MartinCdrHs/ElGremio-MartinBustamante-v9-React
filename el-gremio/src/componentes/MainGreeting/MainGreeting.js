import "./MainGreeting.scss"

const MainGreeting = () => {

    return (
        <div>
            <h1 className="rojo-gremio padding-top">
                ¡El Gremio os da la bienvenida, aventureros!
            </h1>

            <h2 className="grid-primera-letra">
                <span className="letra-inicial rojo-gremio">E</span> <span className="fraccion">ste es el punto de reunión perfecto para
                    vosotros, los amantes del rol y los juegos de mesa! </span>
                <span className="resto-parrafo">En este bar de ambientación única, tal como <span
                    className="h2-grande rojo-gremio">Dungeons & Dragons</span> nos tiene acostumbrados, tú y tus compañeros podréis
                    pasar grandes momentos acompañados de estupendas comidas y bebidas mientras os divertís con nuestra creciente
                    selección de juegos de mesa.
                    ¡Armaos de valor y comenzad vuestra aventura! ¡Os esperamos!</span>
            </h2>
        </div>
    )
}

export default MainGreeting;