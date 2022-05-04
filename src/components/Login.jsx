import {useState} from "react";
import { cartButton } from "../modules/cartButton";

export default function Login({setLoggedIn, loggedIn, setPage, nrElementsCart, setProductsToCart, setNrElementsCart, setUserName, userName}){
    let name = '';
    const [btnText, setBtnTxt] = useState('LogIn');
    
    function handleLogin(e){
        e.preventDefault();
        setLoggedIn(!loggedIn);
        //loggedIn ? (setBtnTxt('LogIn')) : (setBtnTxt('LogOut'));
        //loggedIn ? (setPage('pageLogin')) : (setPage('pageShop'));

        //if i am logged in and press the logoutbutton i will go to login page...
        if (loggedIn){
            setBtnTxt('LogIn');
            setPage('pageLogin');

            setProductsToCart([]);
            setNrElementsCart(0);
        } else {
            setBtnTxt('LogOut');
            setPage('pageShop');
            setUserName(name);
        }
    }


    function showCart(){
        setPage('pageCart');
    }

    function handleChange(event) {
        name = event.target.value;
    }

    function condRend(){
        const cartBut = cartButton(showCart,nrElementsCart);
        let returnText = [];
        
        if (loggedIn){
            returnText[0] = <h2>{userName}</h2>;
            returnText[1] = cartButton(showCart,nrElementsCart);
            returnText[2] = <br />;
            returnText[3] = <button onClick={handleLogin}>{btnText}</button>;
            
        }else{
            returnText[0] =
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleLogin}>{btnText}</button>
            </form>;

        }
        return returnText;
    }

    return (<>{condRend()}
       

       
    </>)
}