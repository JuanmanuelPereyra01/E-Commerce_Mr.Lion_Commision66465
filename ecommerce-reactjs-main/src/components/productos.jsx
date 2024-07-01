import { useEffect, useState } from "react";
import {db} from "../firebaseConfig";
import {getDocs, collection} from "firebase/firestore";

const Products = () => {
    const [ data, setData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "productecom"))
                
                console.log(querySnapshot)

                const obtenerDocumentos = querySnapshot.docs.map(element => ({id: element.id, ...element.data()}))
            } catch (error){
                console.log(error)
            }
        }
    })

    return{
       Products
    }
}

export default Products;