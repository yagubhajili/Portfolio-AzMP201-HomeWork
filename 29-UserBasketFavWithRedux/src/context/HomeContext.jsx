import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAppContext } from './AppContext'


const HomeContext = createContext()

export const useHomeContext = () => useContext(HomeContext)



const HomeProvider = ({ children }) => {

    const { fakeStore } = useAppContext()
    const [filteredProduct, setFilteredProducts] = useState([])
    const [addNewProd, setAddNewProd] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [inputVals, setInputVals] = useState({
        image: '',
        title: '',
        price: '',
        category: '',
        rating: {
            rate: '',
            count: ''
        }
    })
    useEffect( () => {
         setFilteredProducts(fakeStore)
    }, [fakeStore])



    return (
        <HomeContext.Provider value={{ filteredProduct, setFilteredProducts, addNewProd, setAddNewProd, showModal, setShowModal, selectedProduct, setSelectedProduct, inputVals, setInputVals }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider