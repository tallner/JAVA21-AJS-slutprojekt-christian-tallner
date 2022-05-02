import {useState} from "react";
import { productList } from "../modules/productList";

export default function Products({addProductsToCart}){

    console.log('renderProducts')

    const [formData, setFormData] = useState({
        nrOfItems: 0,
        prodId: ''
    });

    function addCart(event){
        event.preventDefault();
        if (formData.nrOfItems > 0){
            addProductsToCart(formData);
            console.log('Products addCart', formData)
        }
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
                
            <div className="products" key={product.id}>
                <h1>{product.name}</h1>
                <img src={product.img_src} alt="testimage" width="150" />
                <h2>Price: {product.price}$</h2>
                <form>
                    <input id={product.id} type="number" min="0" placeholder="Number of items" onChange={handleChange}/>
                    <button id={product.id} onClick={addCart}> Add to cart </button>
                </form>
            </div>
            )
        )
    )
}