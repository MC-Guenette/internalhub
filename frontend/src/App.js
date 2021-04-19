import './App.css';
import React, {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from './pages/sidebar';
import Header from './pages/header';

function App() {
  return (
    <div className="App">
    <Header/>
  <SideBar/>

</div>
  );
}

export default App;
