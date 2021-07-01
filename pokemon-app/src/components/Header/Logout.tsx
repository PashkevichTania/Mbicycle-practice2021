import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../../redux/actions";
import {userSelector} from "../../redux/selectors";

const Logout = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector(userSelector)

    const logoutHandler = () => {
        localStorage.clear()
        dispatch(deleteUser())
        const userInfo = document.getElementById('user-info')
        if (userInfo){
            userInfo.style.display = 'none'
        }

    }

    return (
        <div id="user-info" style={{display: 'none'}}>
            <p className="user__firstName">{currentUser?.firstName}</p>
            <p className="user__lastName">{currentUser?.lastName}</p>
            <p className="user__email">{currentUser?.email}</p>
            <div onClick={logoutHandler} className="logout">logout</div>
        </div>
    );
};

export default React.memo(Logout);
