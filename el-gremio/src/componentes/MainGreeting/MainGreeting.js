import "./MainGreeting.scss"

const MainGreeting = () => {

    return (
        <div>
            <h1 class="rojo-gremio padding-top">
                ¡El Gremio os da la bienvenida, aventureros!
            </h1>

            <h2 class="grid-primera-letra">
                <span class="letra-inicial rojo-gremio">E</span> <span class="fraccion">ste es el punto de reunión perfecto para
                    vosotros, los amantes del rol y los juegos de mesa! </span>
                <span class="resto-parrafo">En este bar de ambientación única, tal como <span
                    class="h2-grande rojo-gremio">Dungeons & Dragons</span> nos tiene acostumbrados, tú y tus compañeros podréis
                    pasar grandes momentos acompañados de estupendas comidas y bebidas mientras os divertís con nuestra creciente
                    selección de juegos de mesa.
                    ¡Armaos de valor y comenzad vuesta aventura! ¡Os esperamos!</span>
            </h2>
        </div>
    )
}

export default MainGreeting;