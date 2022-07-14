import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar"
import Contador  from "./components/contador/contador";

function App() {
  return (
    <>
    < NavBar />
    <ItemListContainer texto = "Jorge" />
    <Contador/> 
    
    </>
  );
}

export default App;
