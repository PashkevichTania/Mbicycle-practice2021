import React from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/actions";

const LoginForm = () => {
    const dispatch = useDispatch()
    const myStorage = window.localStorage;

    const loginHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const loginForm = document.getElementById('loginForm') as HTMLFormElement;


        if (loginForm) {
            const email = loginForm.email.value;
            const firstName = loginForm.firstName.value;
            const lastName = loginForm.lastName.value;
            myStorage.setItem('currentUser', JSON.stringify({firstName, lastName, email}));
            dispatch(addUser({firstName, lastName, email}))
        }
        closeFormHandler()
    }

    const closeFormHandler = () =>{
        const formContainer = document.getElementById('myForm');
        if (formContainer){
            formContainer.style.display='none';
        }
    }

    return (
        <div className="pop-up" id="myForm">
            <div className="form-container">
                <form id="loginForm" onSubmit={loginHandler}>
                    <div className="form__row">
                        <h2>Login</h2>
                        <div id="form__close-button" onClick={closeFormHandler}>x</div>
                    </div>
                    <div className="form__name">
                        <div className="form__item">
                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input id="firstName" name="firstName" placeholder="Enter First Name" required
                                   type="text" pattern="^([А-Яа-яё a-zA-Z]{1,30})$" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="lastName"><b>Last Name</b></label>
                            <input id="lastName" name="lastName" placeholder="Enter Last Name" required type="text"
                                   pattern="^([А-Яа-яё a-zA-Z]{1,30})$" />
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="email"><b>Email</b></label>
                        <input id="email" name="email" placeholder="Enter Email" required type="email"
                               pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.+.[a-zA-Z]{2,4}$" />
                    </div>
                    <button className="btn" id="loginBtn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
