import axios from 'axios'
import { createContext, useState } from 'react'
import { toastNotify } from '../../helper/Toastify';

export const AuthContext = createContext();

const url = 'https://11259.fullstack.clarusway.com/';
 
const AuthContextProvider = (props) => {
    //? In the first situation  we check currentUser in the sessionStorage whether it is Logged in or not. If it is not Logged in that means sessionStorage have nothing(False).
    const [currentUser,  setCurrentUser] = useState(sessionStorage.getItem('username') || false); 
    let keys = sessionStorage.getItem('token')
    //? Atob() function decodes a string of data which has been encoded using Base64 encoding.
    const [myKey, setMyKey] = useState(keys&&Window.atob(keys))

    const createUser = async(userInfo, navigate) => {

        try{
            const res = await axios.post(`${url}account/register`, userInfo)

            if(res.data.token){
                console.log(res)
                setMyKey(res.data.token);
                setCurrentUser(res.data.username);
                sessionStorage.setItem('username',res.data.username);
                const myToken = window.btoa(res.data.token);
                sessionStorage.setItem('token', myToken);
                toastNotify('User registered successfully', 'success');
                navigate('/stock/dashboard');
            }
        }catch(err){
            console.log(err);
            toastNotify(err.message, 'error')
        }
    }

    const signIn = async(userInfo, navigate) => {
        
        try{
            const res = await axios.post(`${url}account/auth/login`, userInfo)

            if(res.data.key){
                setMyKey(res.data.key);
                setCurrentUser(res.data.user.username);
                sessionStorage.setItem("admin", res.data.user.is_superuser);
                sessionStorage.setItem("username", res.data.user.username);
                const myToken = window.btoa(res.data.key);
                sessionStorage.setItem('token', myToken);
            }

        }catch(err){
            console.log(err);
            toastNotify(err.message, 'error');
        }
    }

    let value = {
        createUser,
        currentUser,
        myKey,
        signIn
    }

    return (
        <AuthContextProvider value={value}>
            {props.children}
        </AuthContextProvider>
    )
}

export default AuthContextProvider;