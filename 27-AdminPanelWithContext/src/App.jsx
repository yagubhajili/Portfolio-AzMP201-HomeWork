import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './assets/layout/Layout';
import Admin from './assets/pages/Admin/Admin';
import Edit from './assets/pages/Edit/Edit';
import Post from './assets/pages/Post/Post';
import Home from './assets/pages/Home/Home';
import User from './assets/pages/User/User';
import Login from './assets/pages/LoginRegister/Login';
import Register from './assets/pages/LoginRegister/Register';
import ForgetPassword from './assets/pages/LoginRegister/ForgetPassword';
import Detals from './assets/pages/Home/Details/Detals';
import { AppProvider } from './context/AppContext';
import HomeProvider from './context/HomeContext';
import UserProvider from './context/UserContext';

function App() {
  return (
    <AppProvider>
      <HomeProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Admin />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/post" element={<Post />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/:id" element={<Detals />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forget" element={<ForgetPassword />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </HomeProvider>
    </AppProvider>
  );
}

export default App;
