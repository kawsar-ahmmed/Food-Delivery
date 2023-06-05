import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";


export const BurgerContext = createContext();

function App() {
  const [burger, setBurger] = useState([]);
  console.log(burger)
  return (
    <BurgerContext.Provider value={[burger, setBurger]}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </BurgerContext.Provider>
  );
}

export default App;
