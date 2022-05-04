import ReactDom from "react-dom/client";
import { useState } from "react";
import Login from "./components/Login";
import Products from "./components/products";
import ShoppingCart from "./components/ShoppingCart";

function App(){
    const [loggedIn, SetLoggedIn] = useState(false);
    const [productsToCart, setProductsToCart] = useState({});
    const [page, SetPage] = useState('pageLogin');

    function updateCart(addProducts){
        setProductsToCart(addProducts);
    }

    function renderSwitch() {
        let returnText = '';
        switch (page) {
            case 'pageShop':
                returnText = (
                <div className="shop">
                    <div className="login"><Login loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} SetPage={SetPage} /></div>
                    <div className="product-grid"><Products updateCart={updateCart} /></div>
                </div>)
                break;

            case 'pageLogin':
                returnText = (
                <div className="shop">
                    <div className="login"><Login loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} SetPage={SetPage} /></div>
                </div>)
                break;

            case 'pageCart':
                returnText = (
                <div className="shop">
                    <div className="shoppingCart"><ShoppingCart productsToCart={productsToCart} SetLoggedIn={SetLoggedIn} SetPage={SetPage} /></div>
                </div>)
                break;

            default:
                break;
        }

        console.log(page);

        return returnText;
      }




    return (<>{renderSwitch()}</>)
}

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>);