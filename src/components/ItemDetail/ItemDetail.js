import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"


const ItemDetail = ({ data }) => {
    
    const [goCart, setGoCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) =>{
        setGoCart(true);
        addProduct(data, quantity);
    }
    
    return (
        <div className="container" id="itemdetail">
            <div className="detail">
                <img className="img-detail" src={data.img} alt={data.title} />
            <div className="content">
                <h2>{data.title}</h2>
                <p> Descripcion: {data.description}</p>
                <p> Precio: ${data.price}</p>
                {goCart ? <Link to ='/cart'>Confirmar compra</Link> :<ItemCount initial={1} stock={10} onAdd={onAdd}/>}
            </div>
            </div>
        </div>
    )
}

export default ItemDetail