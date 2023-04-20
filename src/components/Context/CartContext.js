import React, {useState, useContext, createContext} from 'react'

const CartContext= createContext();
export const useCartContext=()=> useContext(CartContext);

const CartProvider = ({children}) => {
  const [cart,setCart]= useState([]);

  const totalPrice =()=>{
    return cart.reduce((prev,act) =>prev + act.quantity * act.price, 0);
  }

  const isInCart=(id)=>{
    cart.find(product=>product.id===id)
  }

  const totalProducts=()=>{
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);
  }

  const clearCart=()=>{
    setCart([]);
  }

  const removeProduct=(id)=>{
    setCart(cart.filter(product=>product.id !== id));
  }

const addProduct = (item,quantity) =>{
  if(isInCart(item.id)){
    setCart(cart.map(product=>{
      return product.id === item.id ? {...product, quantity : product.quantity} : product
    }));
    } else{
    setCart([...cart, {...item, quantity}]);
    }
}


  return (
  <CartContext.Provider value={{cart, isInCart, addProduct, removeProduct, clearCart, totalPrice, totalProducts
  }}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider