import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
//import Contador  from "./components/contador/contador";

function App() {
  return (
    <>
    <BrowserRouter>
      < NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={ <ItemListContainer />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/detalle/:detalleId" element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
