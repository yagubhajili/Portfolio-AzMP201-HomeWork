import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slicers/CardsSlicer.js'
import basketReducer from './slicers/CardsSlicer.js'
import favoritesReducer from './slicers/CardsSlicer.js'
export const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer,
        favorites: favoritesReducer
    },
})