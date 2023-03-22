import "./Contador.scss"


const Contador = ({initial, stock, cantidad, setCantidad, agregar})=> {

    

    const handleSuma = ()=> {
        if(cantidad<stock){
            setCantidad (cantidad + 1)
        }
        
    }
    const handleResta = ()=> {
        if(cantidad>initial){
            setCantidad (cantidad - 1)
        }
        
    }

    return(
        <div className="carrito-controller">
            <div className="caja-contador" id="cont">
                <button onClick={handleResta} className="btn-resta">-</button>
                <span className="show-counter">{cantidad}</span>
                <button onClick={handleSuma} className="btn-suma">+</button>
            </div>
            <div>
                <button onClick={agregar} className="add-bolsa"> Me lo llevo!</button>
            </div>
            
        </div>
    )

}

export default Contador; 