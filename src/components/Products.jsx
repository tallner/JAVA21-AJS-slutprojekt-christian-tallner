import {useState} from "react";
import { productList } from "../modules/productList";

export default function Products(){

    console.log(productList);
   
   
    return (
        
        productList.map(product =>
            (
                
            <div className="products">
                <h1>{product.name}</h1>
                <img src={product.img_src} alt="testimage" />
                <h2>Price: {product.price}$</h2>
                <form>
                    <input type="number" placeholder="Number of items" />
                    <button> Add to cart </button>
                </form>
                
            </div>
            )
        )
    )
}