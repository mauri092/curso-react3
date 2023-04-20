import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {detalleId} = useParams ()

    useEffect(() => {
      const queryDb = getFirestore();
      const queryDoc = doc(queryDb, 'products', detalleId);
      getDoc(queryDoc)
        .then(res=>setData({id: res.id, ...res.data()}))
      }, [detalleId]) 

    return (
        <div className="producto">
            <h1>Detalle del producto</h1>
            <div className="caract">
                <ItemDetail data = {data}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer