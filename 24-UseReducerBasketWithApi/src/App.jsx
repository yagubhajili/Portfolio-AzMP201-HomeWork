import { useEffect, useState, useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Header from './components/Header/Header'
import MainBody from './components/MainBody/MainBody'
import axios from 'axios'
import BasketPage from './components/BasketPage/BasketPage'
import { reducer } from './components/reducers'


function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
  })

  const { data, basket } = state;

  // const [data, setData] = useState([])
  // const [basketCount, setBasketCount] = useState()
  // const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then(res => {
      // setData(res.data)
      dispatch({
        type: "setData",
        data: res.data
      })
    })
  }, [])


  return (
    <>
      <Header basket={basket} dispatch={dispatch} />
      <MainBody data={data} basket={basket} dispatch={dispatch} />
      <BasketPage basket={basket} dispatch={dispatch} />
    </>
  )
}

export default App
