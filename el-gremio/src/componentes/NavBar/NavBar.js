import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import  "./NavBar.scss"


const NavBar = () => {
    
    return (
        <header className="header">

            <Link to="/"> <img className="nav-img" src="./logo80x80.png" alt="logo"/> </Link>
            
            <div className="nav-container">
                
                <CartWidget/>

                <nav className="nav-bar">
                    <Link className="nav_link" to="">El Gremio</Link>

                    <Link className="nav_link" to="">La Taberna</Link>

                    <Link className="nav_link" to="">El Tablón</Link>

                    <Link className="nav_link" to="">Reservas</Link>

                    <Link className="nav_link" to="">Cómo llegar</Link>
                </nav>
            </div>
        </header>
    );
}
  
export default NavBar;