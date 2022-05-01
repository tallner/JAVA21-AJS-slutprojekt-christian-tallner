import {useState} from "react";
import { productList } from "../modules/productList";

export default function Products(){
    let nrOfItems = 0;

    function addCart(event){
        event.preventDefault();
        console.log(nrOfItems);
        console.log('id: ', event.target.id);
    }
    function handleChange(event) {
        nrOfItems = event.target.value;
    }
   
   
    return (
        
        productList.map(product =>
            (
                
            <div className="products">
                <h1>{product.name}</h1>
                <img src={product.img_src} alt="testimage" />
                <h2>Price: {product.price}$</h2>
                <form>
                    <input type="number" placeholder="Number of items" onChange={handleChange}/>
                    <button id={product.id} onClick={addCart}> Add to cart </button>
                </form>
            </div>
            )
        )
    )
}