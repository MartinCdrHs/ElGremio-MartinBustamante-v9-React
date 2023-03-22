import  "../BoardGreeting/BoardGreeting.scss"


const CartGreeting = () => {
    
    return (
        <div className="padding-top">
               
            <h1 className="rojo-gremio">Ésta es tu Bolsa, Aventurero!</h1>

            <h2>Revisa bien todo antes de pagar! 
                <span className="rojo-gremio h2-grande"> No habrá devoluciones, jeje!</span>
            </h2>

        </div>
    );
}
  
export default CartGreeting;