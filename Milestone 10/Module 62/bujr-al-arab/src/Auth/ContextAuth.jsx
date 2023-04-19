import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext({});
const auth = getAuth(app)
const ContextAuth = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [rooms, setRooms] = useState([])
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    const user = 'Rajib'
    const authInfo = {
        user,
        rooms,
        googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuth;