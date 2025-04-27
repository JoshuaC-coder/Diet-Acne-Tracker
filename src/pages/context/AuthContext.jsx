import { createContext, useEffect, useState, useContext } from 'react';
import { supabase } from "../supabaseClient";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)

    const signUpNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
          email: email.toLowerCase(),
          password: password,
        })
    
        if (error) {
          console.error("Error signing up: ", error);
          return { success: false, error };
        }
    
        return { success: true, data };
      }

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session); 
    })

    supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    })
},[]);





    return (
        <AuthContext.Provider value={{session, signUpNewUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(AuthContext);
}