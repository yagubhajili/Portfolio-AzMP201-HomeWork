import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Header from './components/Header/Header'
import MainBody from './components/MainBody/MainBody'
import axios from 'axios'
import BasketPage from './components/BasketPage/BasketPage'


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])

  const [basketCount, setBasketCount] = useState(basket.length)
  const [data, setData] = useState([])
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then(res => {
      setData(res.data)
    })
  }, [])


  return (
    <>
      <Header basketCount={basketCount} setBasketCount={setBasketCount} basket={basket} setBasket={setBasket}  />
      <MainBody data={data} setData={setData} basketCount={basketCount} setBasketCount={setBasketCount} basket={basket} setBasket={setBasket} />
      <BasketPage basket={basket} setBasket={setBasket} basketCount={basketCount} setBasketCount={setBasketCount} />
    </>
  )
}

export default App
