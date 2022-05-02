import {useState} from "react";
export default function Login({SetLoggedIn, loggedIn}){
    const [btnText, setBtnTxt] = useState('LogIn');

    function handleClick(){
        SetLoggedIn(!loggedIn);
        loggedIn ? (setBtnTxt('LogIn')) : (setBtnTxt('LogOut'));
    }

    return (<>
       {loggedIn ? <h1>Logged In</h1>:<h1>Logged Out</h1>}

       <button onClick={handleClick}>{btnText}</button>

       {loggedIn ?
        <span onClick={handleClick} className="fa-stack fa-2x has-badge" data-count="6">
            <i className="fa fa-stack-2x fa-inverse"></i>
            <i className="fa fa-shopping-cart fa-stack-2x black-cart"></i>
        </span>
        : false}
    

    </>)
}