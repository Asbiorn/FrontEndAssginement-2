import { createContext, useContext, useState } from "react";
import { storageRead } from "../Utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

//context -> exposing
// provider -> managing the state

const UserContext = createContext()

export const useUser = () => { // custom hook
    return useContext(UserContext) // { user, setUser }
    //were destructuring an object with {} and not as an array []
} 

//provider 
const UserProvider = ( {children} ) => {
    // magic strings or numbers
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

    const state = {
        user,
        setUser,
    }
    return (
        <UserContext.Provider value={state}>

            {children}

        </UserContext.Provider> 

    )
}

export default UserProvider