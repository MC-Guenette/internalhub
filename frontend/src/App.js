import './App.css';
import React, {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Dashboard from '../src/pages/dashboard';
import AppFrame from '@bold-commerce/bevy-react/lib/components/appframe/AppFrame';
import Sidebar from '@bold-commerce/bevy-react/lib/components/sidebar/Sidebar';
import Nav from '@bold-commerce/bevy-react/lib/components/nav/Nav';
import TicketQa from './pages/ticketqa';
//import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';

function App() {
  const [currentPage, setCurrentPage] = useState('DASHBOARD');

  function setPage(page) {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <AppFrame>
<Sidebar title="Internal Hub" collapsable>  
      <Nav aria-label="three link nav">
  <Nav.Item active iconBefore="home" label="Dashboard" href="#" onClick={ e => setPage('DASHBOARD') } aria-label="first-nav-item" />
  <Nav.Item iconBefore="edit" label="Ticket QA" onClick={ e => setPage('TICKET_QA') } />
  <Nav.Item iconBefore="person" label="My Account" href="#" onClick={ e => e.preventDefault() } />
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
