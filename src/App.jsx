import { useState, useEffect } from 'react';
import './app.css';

export default function App() {
  const [saldo, setSaldo] = useState(0);
  const [mensagem, setMensagem] = useState("");

  // useEffect para reagir ao saldo
  useEffect(() => {
    setMensagem(`O saldo mudou! Saldo atual: R$ ${saldo}`);    
  }, [saldo]); // Só dispara quando "saldo" muda
  
  return (
    <div>
      <h1>Saldo Atual: R$ {saldo}</h1>

      <button onClick={() => setSaldo(saldo + 10)}>Depositar R$ 10,00</button>
      <button onClick={() => setSaldo(saldo - 5)}>Gastar R$ 5,00</button>

      <p>{mensagem}</p>
    </div>
  );
}
