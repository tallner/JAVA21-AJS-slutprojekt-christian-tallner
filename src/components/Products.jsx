import {useState} from "react";
import { productList } from "../modules/productList";

export default function Products(){
   
   
    return (
        productList.map(product =>
            (
            <div className="products">
                <h1>{product.name}</h1>
                <h1>{product.price}</h1>
                <h1>{product.img_src}</h1>
            </div>
            )
        )
    )
}