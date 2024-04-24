import React from 'react'
import './App.css'
import UpperPart from './components/UpperPart'
import SearchBar from './components/SearchBar'
import MainBody from './components/MainBody'

const App = () => {
  return (
    <div className='body'>
      <UpperPart />
      <SearchBar />
      <MainBody />
    </div>
  )
}

export default App