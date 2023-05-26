import React, { createContext, useEffect, useState } from 'react';
import app from '../Utilites/Firebase.ini';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    //create user 
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //display name set
    const userNameSet = (currentUser,name) => {
        return updateProfile(currentUser,{
            displayName:name
        })
    }


    //login 
    const loginUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoader(false)
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email
                }
                fetch("https://car-doctor-recap-server.vercel.app/jwt",{
                    method:"POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    
                    if(data){
                        const token = data.token;
                        localStorage.setItem("carDoctorToken", token)
                    }
                })
            }
        
            else{
                localStorage.removeItem("carDoctorToken")
            }
        })
        return () => {
            return unSubscribe()
        }
    },[])

    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    //singOut
    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }
console.log(user);
    const authInfo = {
        createUser,
        loginUser,
        user, 
        loader,
        userNameSet,
        logOut,
        loginWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;