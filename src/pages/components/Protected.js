import React from 'react'
import { Navigate } from 'react-router-dom'


export const Protectedlogout = ({children}) => {
    const user = localStorage.getItem("user")
    const pathname = window.location.pathname;


    if (!user){
        return <Navigate to = '/Login' replace />;
    }
    return children;
}

export const Protectedlogin = ({children}) => {
    const user = localStorage.getItem("user")
    const pathname = window.location.pathname;
    

    if (user){
        alert("You need to Logout");
        return <Navigate to = '/Homepage' replace />;
    }
    return children;
}

