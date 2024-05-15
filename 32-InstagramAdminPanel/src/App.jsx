import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Users from './Pages/Users/Users'
import Detail from './Pages/Detail/Detail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Detail />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
