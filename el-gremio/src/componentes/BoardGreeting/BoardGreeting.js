import  "./BoardGreeting.scss"


const BoardGreeting = () => {
    
    return (
        <div className="padding-top">
               
            <h1 className="rojo-gremio">Pasa, pasa Aventurero! Éste es El Tablón!</h1>

            <h2>Aquí podrás ver algunas de las aventuras que 
                <span className="rojo-gremio h2-grande"> El Gremio</span> tiene para ti.
                Recuerda que los más rápidos se llevan las mejores!
            </h2>

        </div>
    );
}
  
export default BoardGreeting;