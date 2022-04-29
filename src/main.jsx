//övning 1 react2
import ReactDom from "react-dom/client";
import { useState } from "react";
import Login from "./components/Login";
import Products from "./components/products";
import ShoppingCart from "./components/ShoppingCart";

function App(){
    const [loggedIn, SetLoggedIn] = useState(false);
    
    return (
        <div className="shop">
            {
                loggedIn ? 
                <>
                <div className="login"><Login loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} /></div>
                <div className="products"><Products loggedIn={loggedIn} /></div>
                <div className="shoppingCart"><ShoppingCart loggedIn={loggedIn} /></div>
                </> 
                : 
                <>
                <div className="login"><Login loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} /></div>
                </>
            }
            
        </div>
    )
}

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>);