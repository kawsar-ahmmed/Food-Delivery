import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";


export const BurgerContext = createContext();

function App() {
  const [burger, setBurger] = useState([]);
  console.log(burger)
  return (
    <BurgerContext.Provider value={[burger, setBurger]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </BurgerContext.Provider>
  );
}

export default App;
