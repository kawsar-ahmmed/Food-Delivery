import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import AddToCart from "./component/TabItem/AddToCart/AddToCart";


export const BurgerContext = createContext();

function App() {
  const [burger, setBurger] = useState([]);

  return (
    <BurgerContext.Provider value={[burger, setBurger]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cart" element={<AddToCart></AddToCart>}></Route>
      </Routes>
      <Footer></Footer>
    </BurgerContext.Provider>
  );
}

export default App;
