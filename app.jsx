import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Menu from "./src/components/Menu";
import Error from "./src/components/Error";
import { Suspense } from "react";
import { usercontext } from "./utils/usecontext";

const Grocery = lazy(() => import("./src/components/Grocery"));
const Applayout = () => {
  const [name, setname] = useState("kiran");
  return (
    <div className="app">
      <usercontext.Provider value={{ username: name, setname }}>
        <Header />
        <Outlet />
      </usercontext.Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loadimg.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
