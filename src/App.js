import './App.css';
import HomeScreen from './pages/HomeScreen';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import { useState } from 'react';

function App() {
  //const name = <p>Athena</p>; // const name = <div>Athena</div>; const name = 'Athena';
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount(count += 1)
  //   }, [count]);
  //<div className="App"> {name} </div>
  const startIt = () => {
    console.log("Start Project");
  }
  const stopIt = () => {
    alert("Project Stopped");
  }

  const [firstInput, setFirstInput] = useState('');

  return ( 
  <section id="main">
    <HomeScreen />
    <div id='btn-section'>
      <MyButton name="Start Project" onClick={startIt}/>
      <MyButton name="Stop Project" onClick={stopIt}/>
    </div>
    <div id='input-section'>
      <MyInput type="text" onChange={e => setFirstInput(e.target.value)} value={firstInput} placeholder="First Input"/>
      {/* <MyInput type="text" onChange={e => setFirstInput(e.target.value)} value={firstInput} name="secondInput"/> */}
      <div id="result"> {firstInput} </div>
    </div>
  </section>
  ); 
  
}

export default App;
