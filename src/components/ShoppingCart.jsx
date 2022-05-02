import {useState} from "react";
import { productList } from "../modules/productList";


let shoppingList = [];

export default function ShoppingCart({productsToCart}){
    
    const {prodId, nrOfItems} = productsToCart;
    
    let summa = 0;

    console.log('renderCart')

    console.log('ShoppingCart',productsToCart);

    shoppingList.push({prodId,nrOfItems});
    

    function sum(name,id,nritems,price){
        summa += parseInt(nritems) * parseInt(price);
        return <li key={id}> {name} : {id} : {nritems} : {price} </li>
    }

    function checkOut(){
        
        shoppingList = [];
        
        
        console.log('Checkout', sum('0','0','0','0'), shoppingList);
    }
    

    return (
        <div className="shoppingcart">
            <h1>Shoppingcart</h1>
            <ol>
                {
                shoppingList.map(shoppingItem =>
                    productList.map(
                        content =>
                        content.id==shoppingItem.prodId ?
                        sum(content.name,shoppingItem.prodId,shoppingItem.nrOfItems,content.price)
                        :
                       false
                    )  
                )
                }
                <h3>
                    Sum: {summa}$
                    <br />
                    <button onClick={checkOut}> Checkout </button>
                    
                </h3>
                
            </ol>
            
        </div>
        
    )
}