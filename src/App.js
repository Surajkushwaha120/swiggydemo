import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import FoodVilla from "./assets/img/FoodVilla.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";



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
      <Header />
      <Body />
      <Footer />
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path:"/about",
    element:<About />,
  },
]) 

export default App;
