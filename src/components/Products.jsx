import {useState} from "react";
import { productList } from "../modules/productList";

//props {setProductsToCart, productsToCart, setNrElementsCart}
export default function Products(props){

    const [formData, setFormData] = useState({
        prodId: 0,
        nrOfItems: 0
    });

    function addCart(event){
        event.preventDefault();
        if ((formData.nrOfItems > 0) && (event.target.id == formData.prodId)){ //button id matches form input id?
            addProdToShoppinglist(formData);
            nrItemsInCart();
        }
    }

    function handleChange({target}) {
            setFormData({
                prodId: target.id,
                nrOfItems: parseInt(target.value)
        })
    }

    function nrItemsInCart(){
        let nrElements = 0;
        props.productsToCart.map(p => (nrElements+=parseInt(p.nrOfItems)))
        props.setNrElementsCart(nrElements);
    }

    function addProdToShoppinglist(input){
        const index = props.productsToCart.findIndex(f => f.prodId===input.prodId);
        if (index == -1) {
            props.productsToCart.push(input);
        }else{
            props.productsToCart[index].nrOfItems += parseInt(input.nrOfItems);
        }

        props.productsToCart.sort((a, b) => a.prodId-b.prodId);
        props.setProductsToCart(props.productsToCart);
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