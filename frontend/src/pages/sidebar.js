import React, {useState} from 'react';
import Sidebar from '@bold-commerce/bevy-react/lib/components/sidebar/Sidebar';
import TicketQa from '../pages/ticketqa';
import MyAccount from '../pages/myaccount';
import Dashboard from '../pages/dashboard';
import AppFrame from '@bold-commerce/bevy-react/lib/components/appframe/AppFrame';

function SideBar() {
  const [currentPage, setCurrentPage] = useState('DASHBOARD');

  const handleClick = (evt, item) => {
    console.log("Setting activeItem to", item.value);
    setCurrentPage(item.value)
  };
    const navItems = [
    {
      label: 'Dashboard',
      value: 'DASHBOARD',
      iconBefore: 'home',
      onClick: handleClick,
    },
    {
      label: 'Ticket QA',
      value: 'TICKET_QA',
      iconBefore: 'edit',
      onClick: handleClick,
    },
    {
      label: 'My account',
      value: 'MY_ACCOUNT',
      iconBefore: 'person',
      onClick: handleClick,
      navItems: [
        { label: 'Activity', key: 'activity'},
        { label: 'Wall of Wow', key: 'wow' },
      ],
    },
  ];

  return (
    <AppFrame>
    <Sidebar
    collapsable
    navItems={navItems}
    showHeader={false}
    />
  {
    {
     'DASHBOARD': <Dashboard/>, 
     'TICKET_QA': <TicketQa/>,
     'MY_ACCOUNT': <MyAccount/>
    } [currentPage]
  }
    </AppFrame>
  );
}

export default SideBar;
