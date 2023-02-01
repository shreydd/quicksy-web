import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./src/Body";
import Error from "./src/Error";

const AppLayout = () => {
    return (
        <>
            <h1>quicksy web</h1>
            <Body />
        </>
    )
}



const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />)