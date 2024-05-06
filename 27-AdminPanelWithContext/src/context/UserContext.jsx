import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAppContext } from './AppContext'
import { useHomeContext } from './HomeContext'


const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)



const UserProvider = ({ children }) => {

    const { userss } = useAppContext()
    // const { setFilteredProducts } = useHomeContext()

    const [filteredUsers, setFilteredUser] = useState([])
    const [addNewProd, setAddNewProd] = useState(false)

    const [selectedUser, setSelectedUser] = useState(null);

    const [inputValss, setInputValss] = useState({
        userName: '',
        name: '',
        surname: '',
        password: '',
        email: '',
        gender: '',
        balance: '',
        accountDate: '',
        isAdmin: false,
        basket: [],
        favorites: []
    })

    useEffect(() => {
        setFilteredUser(userss)
    }, [userss])



    return (
        <UserContext.Provider value={{ addNewProd, setAddNewProd, inputValss, setInputValss, selectedUser, setSelectedUser, filteredUsers, setFilteredUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider