import './App.css';
import React, {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Dashboard from '../src/pages/dashboard';
import AppFrame from '@bold-commerce/bevy-react/lib/components/appframe/AppFrame';
import Sidebar from '@bold-commerce/bevy-react/lib/components/sidebar/Sidebar';
import Nav from '@bold-commerce/bevy-react/lib/components/nav/Nav';
import Header from './pages/header';
import TicketQa from './pages/ticketqa';
import MyAccount from './pages/myaccount';
//import {Edit, Home, Person} from '@bold-commerce/bevy-react-icons';
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
<Nav.Item active label="Dashboard" iconBefore="home" href="#" onClick={ e => setPage('DASHBOARD') } aria-label="first-nav-item" />
<Nav.Item iconBefore="edit" label="Ticket QA" onClick={ e => setPage('TICKET_QA') } />
<Nav.Item iconBefore="person" label="My Account" href="#" onClick={ e => setPage('MY_ACCOUNT') } />
</Nav>

</Sidebar>
{/* <Dashboard/> */}
{
  {
   'DASHBOARD': <Dashboard/>, 
   'TICKET_QA': <TicketQa/>,
   'MY_ACCOUNT': <MyAccount/>
  } [currentPage]
}
</AppFrame>

    </div>
  );
}

export default App;
