import "./App.css";

import { useState } from "react";
import Header from "./Header";

function App() {

  const [contador, setContador] = useState<number>(0);

function btnClick(){
    setContador(contador + 1);
  }

  return (
    <>
      <Header title="Hello New World"/>
      <button onClick={btnClick}>Click me</button>
      <p>{contador} cliques!</p>  
    </>
  )
}

export default App
