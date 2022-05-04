import {useState} from "react";
import { cartButton } from "../modules/cartButton";

export default function Login({SetLoggedIn, loggedIn, SetPage}){
    const [btnText, setBtnTxt] = useState('LogIn');
    
    function handleLogin(){
         SetLoggedIn(!loggedIn);
        loggedIn ? (setBtnTxt('LogIn')) : (setBtnTxt('LogOut'));
        loggedIn ? (SetPage('pageLogin')) : (SetPage('pageShop'));
    }

    function showCart(){
        SetPage('pageCart');
    }

    return (<>
       {loggedIn ? <h1>Logged In</h1>:<h1>Logged Out</h1>}

       <button onClick={handleLogin}>{btnText}</button>

       {loggedIn ? cartButton(showCart,55) : false}
    </>)
}