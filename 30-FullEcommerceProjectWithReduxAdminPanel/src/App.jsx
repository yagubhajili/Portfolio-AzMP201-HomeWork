import React from 'react';
import { AppProvider } from './context/AppContext';
import HomeProvider from './context/HomeContext';
import UserProvider from './context/UserContext';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import routers from './routes/routes';

const router = createBrowserRouter(routers);

function App() {
  return (
    <AppProvider>
      <HomeProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </HomeProvider>
    </AppProvider>
  );
}

export default App;
