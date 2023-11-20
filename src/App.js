import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sidebar, { justFunction } from './components/Sidebar';
import Headline from './components/Headline';
import LoginPage from './components/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css";

const Kamlesh = () =>{
  // const [name,setName]=useState('');
  // const handleChange=(event)=>{
  //   setName(event.target.value);
  // }
  // const handlePassChange = (event) => {
  //   setName(event.target.value);
  // };
  // const submitForm=(event)=>{
  //   event.preventDefault();

  // }
  
  return (
    <div>
      <Headline />
      <Sidebar />
      

      {/* <LoginPage /> */}

      {/* <input placeholder="Enter name" onChange={handleChange} value={name} />
      <input
        placeholder="Enter password"
        type="password" value={pass}
      />
      <button onClick={submitForm}>Submit</button>
      <h1>{name}</h1> */}
    </div>
  );
}

export default Kamlesh;