import {useState} from "react";
import { cartButton } from "../modules/cartButton";

export default function Login({setLoggedIn, loggedIn, setPage, nrElementsCart}){
    const [btnText, setBtnTxt] = useState('LogIn');
    
    function handleLogin(){
        setLoggedIn(!loggedIn);
        loggedIn ? (setBtnTxt('LogIn')) : (setBtnTxt('LogOut'));
        loggedIn ? (setPage('pageLogin')) : (setPage('pageShop'));
    }

    function showCart(){
        setPage('pageCart');
    }

    return (<>
       {loggedIn ? <h1>Logged In</h1>:<h1>Logged Out</h1>}

       <button onClick={handleLogin}>{btnText}</button>

       {loggedIn ? cartButton(showCart,nrElementsCart) : false}
    </>)
}