import { useEffect, useReducer, useState } from 'react'
import './App.css'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './assets/pages/Admin/Admin';
import Edit from './assets/pages/Edit/Edit';
import Post from './assets/pages/Post/Post';
import Layout from './assets/layout/Layout';
import reducer from './reducers/reducer';
import { getAllData, getAllDataFromFakeStore } from './services/provider';
import { endPoints } from './services/api';
import { v4 as uuidv4 } from 'uuid';
import Home from './assets/pages/Home/Home';


function App() {


  const [state, dispatch] = useReducer(reducer, {
    data: [],
    fakeStore: []
  })
  useEffect(() => {
    getAllData(endPoints.suppliers).then(res => {
      dispatch({
        type: 'setData',
        data: res
      })
    })
  }, [])



  useEffect(() => {

    getAllDataFromFakeStore(endPoints.products).then(resp => {
      console.log(resp)
      dispatch({
        type: 'setFakeStore',
        fakeStore: resp
      })
    })
  }, [])

  const { data, fakeStore } = state

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Admin data={data} dispatch={dispatch} />} />
            <Route path="edit" element={<Edit />} />
            <Route path="post" element={<Post />} />
            <Route path="home" element={<Home fakeStore={fakeStore} />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
