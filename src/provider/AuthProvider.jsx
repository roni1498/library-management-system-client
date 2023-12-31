import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider )
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail};
            console.log("user in the auth change", currentUser)
            setUser(currentUser);
            setLoading(false);
            // if user exists then ISSUE  a token

            if(currentUser){
                
                axios.post('https://library-management-system-server-mu.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data)
                })
            }
            else{
                axios.post('https://library-management-system-server-mu.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe()
        } ;
    }, [])

    const authInfo = {
        createUser,
        login,
        logOut,
        googleSignIn,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;