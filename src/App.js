import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [char, setChar] = React.useState({})

  React.useEffect(() => {
    async function fetchData(){
      const resPromise = await fetch('/api/console');
      console.log(resPromise);
      const result = await resPromise.json();
      console.log('results', result);
      setChar(result);
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <>
        {
          Object.keys(char).map((ch) => <p>{ch} : {char[ch]}</p>)
        }
        {/* <p>{Object.keys(char)}:{Object.values(char)}</p>
        <p>{['Bhopu', "Mirzapur", "Fallout", "Panchayat", 23, 32, 34, 43]}</p> */}
        </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
