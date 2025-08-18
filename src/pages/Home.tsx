import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {

  const [contador, setContador] = useState<number>(0);

function btnClick(){
    setContador(contador + 1);
  }

  return (
    <>
      <Header title="Hello New World"/>
      <button onClick={btnClick}>Click me</button>
      <p>{contador} cliques!</p>  
      <Link to="/cadastro">Cadastrar cliente</Link>
    </>
  )
}

export default Home;

