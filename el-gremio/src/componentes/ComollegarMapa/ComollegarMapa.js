import "./ComollegarMapa.scss"


const ComollegarMapa = () => {

    return (
        <div>
            <div id="div-mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3171382330293!2d-58.41193318416034!3d-34.596141264605656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8f65959c3f%3A0xbd0bba060e1231f0!2sAg%C3%BCero%201167%2C%20C1425%20EHA%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1663014434327!5m2!1ses-419!2sar"
                    id="mapa" title="map" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <p id="dir-mapa" >Agüero 1167, Buenos Aires</p>

        </div>
    )
}

export default ComollegarMapa;