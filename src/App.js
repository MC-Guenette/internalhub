import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import Dashboard from '../src/pages/dashboard';
import AppFrame from '@bold-commerce/bevy-react/lib/components/appframe/AppFrame';
import Sidebar from '@bold-commerce/bevy-react/lib/components/sidebar/Sidebar';
import Nav from '@bold-commerce/bevy-react/lib/components/nav/Nav';
//import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
function App() {

  function setPage(string) {
    alert(string)
  
  }

  return (
    <div className="App">
      <AppFrame>
<Sidebar title="Internal Hub" collapsable>  
      <Nav aria-label="three link nav">
  <Nav.Item active iconBefore="home" label="Dashboard" href="#" onClick={ e => e.preventDefault() } aria-label="first-nav-item" />
  <Nav.Item iconBefore="edit" label="Ticket QA" href="#" onClick={ e => e.preventDefault() } />
  <Nav.Item iconBefore="person" label="My Account" href="#" onClick={ e => e.preventDefault() } />
</Nav>
</Sidebar>
<Dashboard/>
 
</AppFrame>

    </div>
  );
}

export default App;
