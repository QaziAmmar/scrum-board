import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setCurrentUser(user);
                setPending(false);
                // ...
            } else {
                // User is signed out
                // ...
                setPending(false);
                setCurrentUser(null);
            }
        });

    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};