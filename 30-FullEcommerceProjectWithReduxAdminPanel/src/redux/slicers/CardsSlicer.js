import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  isLogin: false
}

export const getProducts = createAsyncThunk('getProducts', async () => {
  const products = await axios('http://localhost:3000/malzeme')
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
        localStorage.setItem('favorites', JSON.stringify([...state.favorites]))

      } else {
        state.favorites = state.favorites.filter(elem => elem.id !== action.payload.id)
        localStorage.setItem('favorites', JSON.stringify([...state.favorites]))
      }
    },
    increaseCount: (state, action) => {
      let elemIndex = state.basket.findIndex(elem => elem.id === action.payload.id)
      state.basket[elemIndex].count++
      localStorage.setItem('basket', JSON.stringify(state.basket));

    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload

    },
    decreaseCount: (state, action) => {
      let elemIndex = state.basket.findIndex(elem => elem.id === action.payload.id)
      state.basket[elemIndex].count--
      if (action.payload.count <= 1) {
        state.basket = state.basket.filter(elem => elem.id !== action.payload.id);
        localStorage.setItem('basket', JSON.stringify(state.basket));
      }
      localStorage.setItem('basket', JSON.stringify(state.basket));

    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(elem => elem.id !== action.payload.id);
      localStorage.setItem('basket', JSON.stringify(state.basket));
    },
    removeAllFromBasket: (state) => {
      state.basket = []
      localStorage.setItem('basket', JSON.stringify([]));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export const { setBasket, setFavorites, increaseCount, removeFromBasket, decreaseCount, removeAllFromBasket, setIsLogin } = cardsSlice.actions

export default cardsSlice.reducer