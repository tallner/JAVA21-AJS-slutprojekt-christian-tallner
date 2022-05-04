import ReactDom from "react-dom/client";
import { useState } from "react";
import Login from "./components/Login";
import Products from "./components/products";
import ShoppingCart from "./components/ShoppingCart";

function App(){
    const [loggedIn, setLoggedIn] = useState(false);
    const [productsToCart, setProductsToCart] = useState([]);
    const [page, setPage] = useState('pageLogin');
    const [nrElementsCart, setNrElementsCart] = useState(0);

    function updateCart(addProducts){
        setProductsToCart(addProducts);
    }

    function renderSwitch() {
        let returnText = '';
        switch (page) {
            case 'pageShop':
                returnText = (
                <div className="shop">
                    <div className="login"><Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setPage={setPage} nrElementsCart={nrElementsCart} /></div>
                    <div className="product-grid"><Products updateCart={updateCart} productsToCart={productsToCart} setNrElementsCart={setNrElementsCart} /></div>
                </div>)
                break;

            case 'pageLogin':
                returnText = (
                <div className="shop">
                    <div className="login">
                        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setPage={setPage} />
                    </div>
                </div>)
                break;

            case 'pageCart':
                returnText = (
                <div className="shop">
                    <div className="shoppingCart"><ShoppingCart productsToCart={productsToCart} setLoggedIn={setLoggedIn} setPage={setPage} updateCart={updateCart} /></div>
                </div>)
                break;

            default:
                break;
        }

        
        return returnText;
      }




    return (<>{renderSwitch()}</>)
}

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>);