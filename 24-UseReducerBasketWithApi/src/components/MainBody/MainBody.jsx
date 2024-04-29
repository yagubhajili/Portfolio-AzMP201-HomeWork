import React, { useEffect, useReducer, useState } from 'react';
import Cards from './components/Cards';
import reducerInput from '../reducerInput';
const MainBody = ({ data, basket, dispatch }) => {
    // const [searchVal, setSearchVal] = useState("");
    // const [filteredData, setFilteredData] = useState([]);
    const [state, dispatchInpt] = useReducer(reducerInput, {
        searchVal: '',
        filteredData: []
    })
    const { searchVal, filteredData } = state;
    useEffect(() => {
        // setFilteredData(data);
        dispatchInpt({
            type: "setFilteredData",
            filteredData: data
        })
    }, [data]);

    return (
        <section id='mainBody'>
            <div className="container">
                <h1>Home</h1>
                <div className="sorted-datas">
                    <input type="text" placeholder='Search for product...' value={searchVal} onChange={(e) => {
                        const value = e.target.value
                        // setSearchVal(value);
                        dispatchInpt({
                            type: 'setSearchVal',
                            searchVal: value
                        })
                        const filterBySearch = data.filter(item => item.name?.toLowerCase().includes(value?.toLowerCase()));
                        // setFilteredData(filterBySearch);
                        dispatchInpt({
                            type: "setFilteredData",
                            filteredData: filterBySearch
                        })
                    }} />
                    <button onClick={() => {
                        const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
                        // setFilteredData(sortedData);
                        dispatchInpt({
                            type: "setFilteredData",
                            filteredData: sortedData
                        })
                    }}>A-Z</button>
                    <button onClick={() => {
                        const sortedData = [...filteredData].sort((a, b) => b.name.localeCompare(a.name));
                        // setFilteredData(sortedData);
                        dispatchInpt({
                            type: "setFilteredData",
                            filteredData: sortedData
                        })
                    }}>Z-A</button>
                    {/* <button >LOW-HIGH</button>
                    <button>HIGH-LOW</button> */}
                </div>
            </div>
            <div className="container cardHodler">
                <Cards data={filteredData} basket={basket} dispatch={dispatch} />
            </div>
        </section>
    );
};

export default MainBody;
