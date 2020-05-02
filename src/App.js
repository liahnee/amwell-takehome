import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './stylesheets/App.css';

function App() {

  const [ data, setData ] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

  const sortData = (data) => {
    let int = data.map(item => parseInt(item))
    int = int.filter((item, idx, arr) => {return arr.indexOf(item) == idx});
    int.sort((a,b)=> a-b);
    return int;
  }

  const fetchData = async () => {
    await fetch('https://www.iwillfearnoevil.com/screen/string.txt')
    .then(resp => resp.text())
    .then(text => {
      let data = text.split("\n")
      setData(sortData(data));
    })
    .catch(error => {
      console.log('Error', error)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img id='logo' src={logo} alt="amwell logo"/>
        <h1>Lowest Three Numbers</h1>
      </header>
      <main className="App-main">
        <p>
          [ {data[0]}, {data[1]}, {data[2]} ]
        </p>
      </main>
    </div>
  );
}

export default App;
