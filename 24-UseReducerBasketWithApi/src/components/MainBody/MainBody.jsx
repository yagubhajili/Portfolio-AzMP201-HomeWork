import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';

const MainBody = ({ data, basket, dispatch }) => {
    const [searchVal, setSearchVal] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    return (
        <section id='mainBody'>
            <div className="container">
                <h1>Home</h1>
                <div className="sorted-datas">
                    <input type="text" placeholder='Search for product...' value={searchVal} onChange={(e) => {
                        const value = e.target.value
                        setSearchVal(value);
                        const filterBySearch = data.filter(item => item.name?.toLowerCase().includes(value?.toLowerCase()));
                        setFilteredData(filterBySearch);
                    }} />
                    <button onClick={() => {
                        const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
                        setFilteredData(sortedData);
                    }}>A-Z</button>
                    <button onClick={() => {
                        const sortedData = [...filteredData].sort((a, b) => b.name.localeCompare(a.name));
                        setFilteredData(sortedData);
                    }}>Z-A</button>
                    {/* <button >LOW-HIGH</button>
                    <button>HIGH-LOW</button> */}
                </div>
            </div>
            <div className="container cardHodler">
                <Cards data={filteredData} basket={basket} dispatch={dispatch}/>
            </div>
        </section>
    );
};

export default MainBody;
