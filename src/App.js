import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ServiceDetails from "./components/ServiceDetail";
import Error from "./components/Error";
import SideBar from "./components/SideBar";


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet/> {/** this is replaced based on children selection*/}
//       <SideBar/>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <SideBar /> 
      <div className="content">
        <Outlet /> {/* Main content goes here */}
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path:"/services/:serviceID",
        element: <ServiceDetails />,
        errorElement: <Error />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
