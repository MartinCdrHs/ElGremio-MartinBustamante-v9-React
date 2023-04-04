import "./TavernMenu.scss"

const TavernMenu = () => {

    return (
        <div className="menu-container">
            <div className="titulo-carta">
                Comidas
            </div>

            <div className="lista-carta">
                <span id="item1">Hamburguesa Fireball</span>
                <span id="precio1">$1800.-</span>
                <span id="item2">Combo Crítico</span>
                <span id="precio2">$3200.-</span>
                <span id="item3">Bocados D20</span>
                <span id="precio3">$2000.-</span>
                <span id="item4">Pizza Muzzarella</span>
                <span id="precio4">$2000.-</span>
                <span id="item5">Pizza Napolitana</span>
                <span id="precio5">$2400.-</span>
                <span id="item6">Hamburguesa c/queso</span>
                <span id="precio6">$1200.-</span>
                <span id="item7">Papas c/cheddar y panceta</span>
                <span id="precio7">$1800.-</span>
            </div>

            <div className="titulo-carta">
                Bebidas
            </div>

            <div className="lista-carta">
                <span id="item8">Dwarven Ale</span>
                <span id="precio8">$950.-</span>
                <span id="item9">Poción de Heroísmo</span>
                <span id="precio9">$1000.-</span>
                <span id="item10">Gaseosa (350 cc)</span>
                <span id="precio10">$500.-</span>
                <span id="item11">Quilmes 500cc</span>
                <span id="precio11">$900.-</span>
                <span id="item12">Stella Artois (350 cc)</span>
                <span id="precio12">$1000.-</span>
            </div>
        </div>
    )
}

export default TavernMenu;