import React from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, collection, doc, addDoc, updateDoc } from "firebase/firestore";

function Cart() {
    const {cart, totalPrice} = useCartContext ();
    
    const order ={
        buyer:{
            nombre: 'Cosme Fulanito',
            email: 'cosmefulanito@gmail.com',
            phone: '12345678',
            address: 'calle falsa 123'
        },
        items: cart.map(p=>({id: p.id, title: p.title, price: p.price, quantity: p.quantity})),
        total: totalPrice()
    }

    const handleClick = () =>{
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then (({id})=> console.log(id))
    }

    const updateOrder=()=>{
        const db = getFirestore();
        const orderDoc = doc(db,'orders','xrAtZM0EzX6TEuiTmNG3');
        updateDoc(orderDoc, {name:'Roberta'});
        }
        updateOrder();



    if (cart.length ===0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Hacer compra</Link>
            </>
        )
    }


    return (
        <>
        {cart.map(product =><ItemCart key={product.id} product={product}/>)
        }
        <p> total:$ {totalPrice()} </p>
        <button onClick={handleClick}>Generar orden de compra</button>
        </>
    )

}

export default Cart