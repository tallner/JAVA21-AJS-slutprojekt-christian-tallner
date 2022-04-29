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
    </>)
}