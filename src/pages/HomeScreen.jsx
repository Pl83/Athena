import React from 'react';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const startIt = () => {
    console.log("Start Project");
  }
  const stopIt = () => {
    alert("Project Stopped");
  }

  const [firstInput, setFirstInput] = useState('');

  return (
      <section id='main'>
        <h1>Welcome to Athena</h1>
          <div id='btn-section'>
          <MyButton name="Start Project" onClick={startIt}/>
          <MyButton name="Stop Project" onClick={stopIt}/>
        </div>
        <div id='input-section'>
          <MyInput type="text" onChange={e => setFirstInput(e.target.value)} value={firstInput} placeholder="First Input"/>
          {/* <MyInput type="text" onChange={e => setFirstInput(e.target.value)} value={firstInput} name="secondInput"/> */}
          <div id="result"> {firstInput} </div>
        </div>
        <div>
          <Link to="/products">See Products</Link>
        </div>
      </section>
  );
}