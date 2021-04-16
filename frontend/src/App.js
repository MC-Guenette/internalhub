import './App.css';
import React, {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Dashboard from '../src/pages/dashboard';
import AppFrame from '@bold-commerce/bevy-react/lib/components/appframe/AppFrame';
import Sidebar from '@bold-commerce/bevy-react/lib/components/sidebar/Sidebar';
import Nav from '@bold-commerce/bevy-react/lib/components/nav/Nav';
import Header from './pages/header';
import TicketQa from './pages/ticketqa';
import {Edit, Home, Person} from '@bold-commerce/bevy-react-icons';
//import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';

function App() {
  const [currentPage, setCurrentPage] = useState('DASHBOARD');

  function setPage(page) {
    setCurrentPage(page);
  }

  return (
  
    <div className="App">
        <Header/>
      <AppFrame>

<Sidebar collapsable showHeader={false}>  
<Nav aria-label="three link nav">
  <Home/><Nav.Item active label="Dashboard" href="#" onClick={ e => setPage('DASHBOARD') } aria-label="first-nav-item" />
  <Edit/> <Nav.Item iconBefore="Edit" label="Ticket QA" onClick={ e => setPage('TICKET_QA') } />
  <Person/><Nav.Item iconBefore="person" label="My Account" href="#" onClick={ e => e.preventDefault() } />
</Nav>

</Sidebar>
{/* <Dashboard/> */}
{
  {
   'DASHBOARD': <Dashboard/>, 
   'TICKET_QA': <TicketQa/>
  } [currentPage]
}
</AppFrame>

    </div>
  );
}

export default App;
