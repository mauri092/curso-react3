import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <div className='App'>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/product/:detalleId' element ={<ItemListContainer/>}/>
        <Route path='/category/:categoryId ' element ={<ItemListContainer/>}/>
        <Route path='/carpas/:categoryId' element ={<ItemListContainer/>}/>
        <Route path='/parafernalia/:categoryId' element ={<ItemListContainer/>}/>
        <Route path='/detalle/:detalleId' element ={<ItemDetailContainer/>}/>
        <Route path='/cart' element ={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
      
      
      
      
      <Products/>
    </div>
  );
}

export default App;
