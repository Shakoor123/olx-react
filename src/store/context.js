import {createContext} from 'react';
import { useState } from 'react/cjs/react.development';
 
export const firebaseContext = createContext (null);
export const AuthContext =createContext(null)

export default function Context({children}){
    const [user,setUser] = useState("hellow")
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}