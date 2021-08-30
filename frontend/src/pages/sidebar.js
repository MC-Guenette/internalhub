import React, { useState } from 'react';
import Sidebar from '@bold-commerce/bevy-react/lib/components/sidebar/Sidebar';
import TicketQa from '../pages/ticketqa';
import Profile from './components/myaccount/myaccount';
import Dashboard from '../pages/dashboard';
import AppFrame from '@bold-commerce/bevy-react/lib/components/appframe/AppFrame';
import WowCard from '../pages/wowcards';
import Activity from './components/myaccount/activity';


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
      navItems: [
        { label: 'Submit a Ticket', value: 'TICKET_QA', key: 'ticketqa', onClick: handleClick },
        { label: 'TEST PAGE', value: 'WOW_CARDS', key: 'wow', onClick: handleClick },
      ]
    },
    {
      label: 'My account',
      value: 'MY_ACCOUNT',
      iconBefore: 'person',
      navItems: [
        { label: 'Profile', value: 'MY_ACCOUNT', key: 'profile', onClick: handleClick },
        { label: 'Wall of Wow', value: 'WOW_CARDS', key: 'wow', onClick: handleClick },
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
          'DASHBOARD': <Dashboard />,
          'TICKET_QA': <TicketQa />,
          'MY_ACCOUNT': <Profile />,
          'WOW_CARDS': <WowCard />
        }[currentPage]
      }
    </AppFrame>
  );
}

export default SideBar;
