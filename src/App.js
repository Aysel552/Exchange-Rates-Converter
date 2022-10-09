
import { useEffect } from 'react';
import './App.css';

function App() {
  const MY_KEY = "UUfzccY0vDiZmqRGAZCv5bxaCGQiXkFI";

  useEffect(() =>{
    const getRate = async() => {
      const response = await fetch(`https://api.apilayer.com/currency_data/live?base=USD&symbols=EUR,GBP`)
    }
  })
  return (
    <div className="App">
     <h2>Adding</h2>
    </div>
  );
}

export default App;
