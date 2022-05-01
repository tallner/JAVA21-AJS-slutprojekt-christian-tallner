import {useState} from "react";
import { productList } from "../modules/productList";

let sum = 0;
let shoppingList = [];

export default function ShoppingCart({productsToCart}){
    //const [sum, setSum] = useState(0);

    const {prodId, nrOfItems} = productsToCart;
   // shoppingList.push({prodId,nrOfItems});
    
    function calcSum(product){
        console.log('Price is:', product.price*nrOfItems);

        
        //     console.log('content id:', content.ShoppingCart.id);
        shoppingList.map(content =>
            content.product.id==prodId ?
        //    console.log('id exists ',content.product.id) : 
            content.product.nrOfItems += nrOfItems : 
            shoppingList.push({product,nrOfItems})   
        //    console.log('id not exist ',content.product.id)
)


        if (shoppingList.length==0) {
            shoppingList.push({product,nrOfItems});
        }

        console.log('id exists ',shoppingList.length);
        
        
        sum += product.price*nrOfItems;
        console.log('sum ',sum);
        
  

       console.log('shoppinglist ',shoppingList);
        
    }

    productList.map(content =>
        content.id==prodId ? calcSum(content): false       
    )
    
    
    return (
        <div>
            <h1>shoppingcart</h1>
            <h2>{prodId}</h2>
            <h2>{nrOfItems}</h2>
            <h2>{sum}</h2>
        </div>
    )
}