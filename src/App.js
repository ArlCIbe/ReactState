import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import { useState } from 'react';

function App() {
    const [name, setName] = useState("water bottles");
    const [counter, setCounter] = useState(0);
    const [sleepy, setSleepy] = useState(false);
    const [type, setType] = useState('');
    const [ages, setAges] = useState(0)
    const [myFavoriteThing, setFaves] = useState({name: name, type: type, age: ages});

    function handleClick(event) {
        setCounter(counter + 1);
    }

    function handleSetSleepy(event) {
        setSleepy(!sleepy);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleFaves(event) {
        event.preventDefault();
        setFaves({name: name, type: type, age: ages});
        console.log(myFavoriteThing);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

    function handleMinAge(event) {
        setAges(event.target.value);
    }

  return (
    <>
      <Header title={name} />
      <button onClick={function(event) {
        setName('Hello Class')
    }}>Click Me</button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{counter}</h1>
        <button onClick={handleClick}>Count++</button>


        <h1>{sleepy ? "awake" : "schleep"}</h1>
        <button onClick={handleSetSleepy}>Wake Up!</button>

        <form>
            <input value={name} onChange={handleNameChange} type='text' />
        </form>
        <h1>Your Name is {name} </h1>

        <form onSubmit={handleFaves}>
            <input value={name} onChange={handleNameChange} type='text'/>
            <input value={type} onChange={handleTypeChange} type='text'/>
            <input value={ages} onChange={handleMinAge} type='number' />
            <input type='submit' value='Save Object' />
        </form>
        <h1>Your fave is {myFavoriteThing.name}</h1>
        <h1>It is a {myFavoriteThing.type}</h1>
        <h1>It is for ages {myFavoriteThing.age} and up</h1>

      </header>
    </>
  );
}

export default App;
