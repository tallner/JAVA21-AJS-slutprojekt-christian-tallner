import {useState} from "react";
import { cartButton } from "../modules/cartButton";

// props {setLoggedIn, loggedIn, setPage, nrElementsCart, setProductsToCart, setNrElementsCart, setUserName, userName}
export default function Login(props){
    let name = '';
    const [btnText, setBtnTxt] = useState('LogIn');
    
    function handleLogin(e){
        e.preventDefault();
        props.setLoggedIn(!props.loggedIn);

        //if i am logged in and press the logoutbutton i will go to login page...
        if (props.loggedIn){
            setBtnTxt('LogIn');
            props.setPage('pageLogin');

            props.setProductsToCart([]);
            props.setNrElementsCart(0);
        } else {
            setBtnTxt('LogOut');
            props.setPage('pageShop');
            props.setUserName(name);
        }
    }


    function showCart(){
        props.setPage('pageCart');
    }

    function handleChange(event) {
        name = event.target.value;
    }

    function condRend(){
        let returnText = [];
        
        if (props.loggedIn){
            returnText[0] = <h2>{props.userName}</h2>;
            returnText[1] = cartButton(showCart,props.nrElementsCart);
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