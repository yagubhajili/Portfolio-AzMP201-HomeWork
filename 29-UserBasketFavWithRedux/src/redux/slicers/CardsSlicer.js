import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}


export const getProducts = createAsyncThunk('getProducts', async () => {

  const products = await axios('http://localhost:3000/malzeme')
  // console.log(products)
  return products.data

})

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      let elemIndex = state.basket.findIndex(elem => elem.id === action.payload.id)
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }]
      } else {
        state.basket[elemIndex].count++
      }
      localStorage.setItem('basket', JSON.stringify([...state.basket]))
    },
    setFavorites: (state, action) => {
      let elemIndex = state.favorites.findIndex(elem => elem.id === action.payload.id)
      if (elemIndex === -1) {
        state.favorites = [...state.favorites, { ...action.payload }]
      }
      state.favorites = [...state.favorites, action.payload]
      localStorage.setItem('favorites', JSON.stringify([...state.favorites]))
    },
    increaseCount: (state, action) => {
      let elemIndex = state.basket.findIndex(elem => elem.id === action.payload.id)
      state.basket[elemIndex].count++

    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(elem => elem.id !== action.payload.id);
      localStorage.setItem('basket', JSON.stringify(state.basket));

    },
  },


  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export const { setBasket, setFavorites, increaseCount, removeFromBasket } = cardsSlice.actions

export default cardsSlice.reducer