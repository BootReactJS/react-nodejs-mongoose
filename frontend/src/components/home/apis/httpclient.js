import axios from "axios";

export function invokeAPI(setDataarray){
    //axios.get("https://fakestoreapi.com/products")
    axios.get("https://dummyjson.com/products")
        .then(   ( resolvedata) =>{
            console.log(resolvedata)
            setDataarray(resolvedata.data.products)
        })
        .catch( (rejectdata)  =>{
            console.log(rejectdata)
        })
}