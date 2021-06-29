import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces";

const Login = () => {

    const myStorage = window.localStorage;

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() =>{
        const retrievedUser = localStorage.getItem('currentUser');
        if (retrievedUser){
            setUser(JSON.parse(retrievedUser))
            console.log(user)
        }
    }, [myStorage])

    const openFormHandler = () =>{
        const formContainer = document.getElementById('myForm');
        if (formContainer){
            formContainer.style.display='block';
        }
    }

    return (
        <div>
            {user ? (user.firstName) : (<button onClick={openFormHandler}>login</button>)}
        </div>
    )
};


export default Login;
