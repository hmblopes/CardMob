import { useState } from 'react'
import './App.css'
import Counter from "./componentes/Counter"

function App() {
  const [count, setCount] = useState(0);

  // const updateCount = () => {

  // }

  // const updateCount1 = () => count + 1;

  //const dados = {

  // };
  //dados.atualiza("gerson");
  //dados.endereco.complementos[1];


  return (
    <>
      <Counter title="Contando..."/>
      <Counter inicial="100"/> 
  </>
  );
}
export default App
