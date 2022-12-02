import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <div className=''>
        <NavBar/>
      </div>
      <ItemListContainer greeting={"Bienvenido!!"}/>
    </div>
  );
}

export default App;
