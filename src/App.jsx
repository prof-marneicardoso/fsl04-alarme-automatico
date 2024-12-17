import { useState, useEffect } from 'react';
import './app.css';

export default function App() {
  const [saldo, setSaldo] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [contador, setContador] = useState(0);

  // useEffect para reagir ao saldo
  useEffect(() => {
    setMensagem(`O saldo mudou! Saldo atual: R$ ${saldo}`);
  }, [saldo]); // Só dispara quando "saldo" muda

  // useEffect para reagir ao contador
  useEffect(() => {
    setTimeout(() => {
      setContador((contador) => contador + 1);
    }, 1000); // a cada 1 segundo == 1000ms (milissegundos)
  }, [contador]);

  // Verificar se o saldo é menor que 5
  const handleSaldo = () => {
    if (saldo >= 5) {
      setSaldo(saldo - 5);
    
    } else {
      setMensagem("Saldo insuficiente!");
    }
  }
  
  return (
    <div>
      <h1>Saldo Atual: R$ {saldo}</h1>

      <button onClick={() => setSaldo(saldo + 10)}>Depositar R$ 10,00</button>
      <button onClick={() => handleSaldo()}>Gastar R$ 5,00</button>

      <p>{mensagem}</p>

      <p>Contador: {contador}</p>
    </div>
  );
}
