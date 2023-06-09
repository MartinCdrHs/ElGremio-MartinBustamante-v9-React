import "./App.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./componentes/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./componentes/Checkout/Checkout";
import Main from "./componentes/Main/Main";
import Tavern from "./componentes/Tavern/Tavern";
import ComoLlegar from "./componentes/ComoLlegar/ComoLlegar";




function App() {

 

  return (

    <CartProvider>   

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/tavern" element={<Tavern/>}/>
          <Route path="/board" element={<ItemListContainer/>}/>
          <Route path="/board/:categoria" element={<ItemListContainer/>}/>
          <Route path="/board/detalles/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/comollegar" element={<ComoLlegar/>} />
        </Routes>
        
      </BrowserRouter>

    </CartProvider>

    
  );
}

export default App;
