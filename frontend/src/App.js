import './App.css';
import React, {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from './pages/sidebar';
import Dashboard from '../src/pages/dashboard';
import Header from './pages/header';


function App() {
  return (
    <div className="App">
    <Header/>
  <SideBar/>
    <Dashboard/>

  
</div>
  );
}

export default App;
