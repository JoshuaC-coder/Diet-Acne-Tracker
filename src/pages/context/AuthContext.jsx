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

    // Sign in
    const signInUser = async (email, password) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if(error)
            {
                console.error("sign in error occured: ", error);
                return {success: false, error: error.message}
            }
            console.log("sign-in success: ", data)
            return {success: true, DataTransferItemList}
        } catch(error) {
            console.error("Unexpected error during sign-in:", error.message);
            return {
                success: false,
                error: "An unexpected error occurred. Please try again.",
            };
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session); 
    })

    supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    })
    },[]);

   

    


    // Sign Out
    const signOut = () => {
        const { error } = supabase.auth.signOut();
        if(error)
        {
            console.error("there was an error: ", error);
        }
    }





    return (
        <AuthContext.Provider
          value={{ signUpNewUser, signInUser, session, signOut }}
        >
          {children}
        </AuthContext.Provider>
      );
    }

export const UserAuth = () => {
  return useContext(AuthContext);
  
};