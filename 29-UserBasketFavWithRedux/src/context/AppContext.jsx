import React, { createContext, useContext, useEffect, useState } from 'react';
import { endPoints } from '../services/api';
import { getAllData, getAllDataFromFakeStore } from '../services/provider';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [fakeStore, setFakeStore] = useState([]);
    const [userss, setUserss] = useState([]);

    useEffect(() => {
        getAllData(endPoints.suppliers).then(res => setData(res));
    }, []);

    useEffect(() => {
        getAllDataFromFakeStore(endPoints.products).then(resp => setFakeStore(resp));
    }, []);

    useEffect(() => {
        getAllDataFromFakeStore(endPoints.users).then(response => setUserss(response));
    }, []);

    return (
        <AppContext.Provider value={{ data, fakeStore, userss }}>
            {children}
        </AppContext.Provider>
    );
};
