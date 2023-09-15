import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Users from './components/Users';
import Products from './components/Products';

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
const AppRouter = createBrowserRouter([
    {  
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            { path: '/users', element: <Users /> },
            { path: '/products', element: <Products /> },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);