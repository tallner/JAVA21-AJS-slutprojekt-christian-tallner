import { productList } from "../modules/productList";

export default function ShoppingCart({productsToCart, setPage, setLoggedIn,  updateCart}){
    
    let totalSum = 0;

    function sum(name,id,nritems,price){
        totalSum += parseInt(nritems) * parseInt(price);
        return  <li key={id}> 
                    {name}. {nritems}pcs. {price}$/pc 
                </li>;
    }

    function checkOut(){        
        updateCart([{}]);
        alert('Done shopping');
        setLoggedIn(false);
        setPage('pageLogin');
    }
    

    return (
        <div className="shoppingcart">
            <h1>Shoppingcart</h1>
            <ol>
                {
                productsToCart.map(shoppingItem =>
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
                    Sum: {totalSum}$
                    <br />
                    <button onClick={checkOut}> Checkout </button>
                    
                </h3>
                
            </ol>
            
        </div>
        
    )
}