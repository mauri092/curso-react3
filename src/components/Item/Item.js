import { useContext } from 'react'
import {Link} from "react-router-dom"
import { useCartContext } from '../Context/CartContext'
import './Item.css'

const Item = ({ id, name, img, price, category}) => {

    const nombre = useContext(useCartContext)

    return (
        <div className= "Item">
            <h2>{name}</h2>
            <img src={img} alt={'Producto'}/>
            <h3>${price}</h3>
            <h4>{category}</h4>
            <Link to={`/item/${id}`}><button>Detalle</button></Link>
        </div>
    )
}

export default Item


