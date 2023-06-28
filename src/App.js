import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import store from "./utils/store.js";
import Cart from "./components/cart.js";
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     key: "h1",
//   },
//   "Hello"
// );

// Functional Component

// const panjabiDhaba = {
//   name: "Panjabi Dhaba",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yyrjmyajqhyjq6mp1gha",
//   place: "North India",
//   rating: "3.7",
//   time: "31",
//   paisa: "240",
// };

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        {/* <UserContext.Provider> */}
        <Header />
        <Outlet />
        <Footer />
        {/* </UserContext.Provider> */}
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
