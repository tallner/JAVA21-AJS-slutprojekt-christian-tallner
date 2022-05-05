import { productList } from "../modules/productList";

//props ({productsToCart, setPage, setLoggedIn, setProductsToCart, setNrElementsCart, userName}){
export default function ShoppingCart(props){
    
    let totalSum = 0;

    function sum(name,id,nritems,price){
        totalSum += parseInt(nritems) * parseInt(price);
        return  <li key={id}>{name}.{nritems}pcs.{price}$/pc
                    <button>Delete</button>
                </li>;
    }

    function checkOut(){        
        props.setProductsToCart([]);
        alert('Done shopping');
        props.setLoggedIn(false);
        props.setPage('pageLogin');
        props.setNrElementsCart(0);
    }
    

    return (
        <div className="shoppingcart">
            <h1>{props.userName}´s shoppingcart</h1>
            <ol>{
                    props.productsToCart.map(shoppingItem =>
                        productList.map(
                            content =>
                            content.id==shoppingItem.prodId ?
                            sum(content.name,shoppingItem.prodId,shoppingItem.nrOfItems,content.price)
                            :
                        false)  
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