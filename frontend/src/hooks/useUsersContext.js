import { UsersContext } from "../context/UsersContext"
import { useContext } from "react"

export const useUsersContext = () => {
    const context = useContext(UsersContext)

    if(!context) {
        throw Error('useUsersContext must be added inside a UsersContextProvider')
    }
    
    return context  
}