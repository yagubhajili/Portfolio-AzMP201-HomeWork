import React from 'react'
import './searchbar.css'

const SearchBar = () => {
    return (
        <div className='searchDiv container'>
            <input type="text" placeholder='search github username...'/>
            <button>Search</button>
        </div>
    )
}

export default SearchBar