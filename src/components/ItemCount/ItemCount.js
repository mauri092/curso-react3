import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (initial)

    const decrement = () => setCount (count - 1)

    const increment = () => setCount (count + 1)

    return (
        <div className="counter"> 
            <h2>0</h2>
            <button className= "resta" disabled={count <1} onClick={decrement}> Decrement </button>
            <button className= "suma" disabled={count >= stock} onClick={increment}> Increment</button>
            <button className="agregarCarrito" onClick={() => onAdd(count)} disabled={stock === 0} > Agregar al carrito </button>
        </div>
    )
}

export default ItemCount