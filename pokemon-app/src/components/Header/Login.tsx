import React from 'react';
import {RootState} from "../../redux/rootReducer";
import {useSelector} from "react-redux";

const Login = () => {

   const currentUser = useSelector((state: RootState) =>state.user.user)

    const openFormHandler = () => {
        const formContainer = document.getElementById('myForm');
        if (formContainer){
            formContainer.style.display='block';
        }
    }
    const toggleUserInfo = () =>{
       const userInfo = document.getElementById('user-info')
        if (userInfo){
            userInfo.style.display === 'none'?
                userInfo.style.display = 'flex':
                userInfo.style.display = 'none';
        }
    }

    return (
        <div>
            {currentUser ?
                (<img onClick={toggleUserInfo} className="userava" src="./user.svg" alt="user logo" />):
                (<button onClick={openFormHandler}>login</button>)}
        </div>
    )
};


export default Login;
