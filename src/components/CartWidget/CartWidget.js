import './CartWidget.css'
import carrito from '../CartWidget/carrito.png'
import React from 'react'
import { useCartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom'



function CartWidget() {
const {totalProducts, total} = useCartContext();
const navigate = useNavigate()

  return (
    <div className='CartWidget' onClick={() => navigate ("./Cart") }>
            <img src={carrito} alt="cart-widget" className='CartImg'/>
            {totalProducts} total ${total}
        </div>
  );
}

export default CartWidget





// import { Link } from 'react-router-dom'
// import { useCartContext } from "../Context/CartContext"

// const CartWidget = () => {
//     const {totalProducts} = useCartContext()
//     return (
//         <button className="btn btn-primary cartWidget">
//             <Link to = {'/cart'} className='nav-link'>
//                 <i className='fas fa-shopping-cart fa-lg'></i>
//                 {totalProducts() > 0 && <span className='cantCarrito'>{totalProducts()}</span>}
//             </Link>
//             {/* <img src={carrito} alt="logo-carrito"/>
//             {0} */}
//         </button>
//     )
// }

// export default CartWidget

