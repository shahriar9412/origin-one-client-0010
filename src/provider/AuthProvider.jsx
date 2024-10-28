import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
      
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;