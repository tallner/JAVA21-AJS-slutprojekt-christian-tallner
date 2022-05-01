import {useState} from "react";
import { productList } from "../modules/productList";

export default function Products({addProductsToCart}){

    const [formData, setFormData] = useState({
        nrOfItems: '',
        prodId: ''
    });

    function addCart(event){
        event.preventDefault();
        addProductsToCart(formData);
    }

    function handleChange({target}) {
            setFormData({
            nrOfItems: target.value,
            prodId: target.id
        })
    }
   
   
    return (
        
        productList.map(product =>
            (
                
            <div className="products">
                <h1>{product.name}</h1>
                <img src={product.img_src} alt="testimage" width="150" />
                <h2>Price: {product.price}$</h2>
                <form>
                    <input id={product.id} type="number" placeholder="Number of items" onChange={handleChange}/>
                    <button id={product.id} onClick={addCart}> Add to cart </button>
                </form>
            </div>
            )
        )
    )
}