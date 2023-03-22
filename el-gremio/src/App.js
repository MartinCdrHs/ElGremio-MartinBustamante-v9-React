import "./App.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./componentes/Cart/Cart";
import { CartProvider } from "./Context/CartContext";





function App() {

 

  return (

    <CartProvider>   

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/juegos/:categoria" element={<ItemListContainer/>}/>
          <Route path="/detalles/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
          {/* <Route path="" element={}/> */}

        </Routes>
        
      </BrowserRouter>

    </CartProvider>

    
  );
}

export default App;
