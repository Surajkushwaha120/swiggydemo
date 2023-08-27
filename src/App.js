import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import FoodVilla from "./assets/img/FoodVilla.png";
import { Route, RouterProvider, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestauranteMenu";

export const Titel = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU"
        src={FoodVilla}
      />
    </a>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        </Route>
      </Routes>
    </div>
  );
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element:<App />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]) ;
// (<RouterProvider router={appRouter} />)

export default App;
