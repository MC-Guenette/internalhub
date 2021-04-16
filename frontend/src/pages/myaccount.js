import React from 'react';
import UserDetails from './components/myaccount/userdetails';
import WowCards from './components/myaccount/wowcards';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import './components/myaccount/myaccount.css';
import './components/myaccount/wowcards.css';


  
function Dashboard() {
    return(
        <Page>
        <Page.Header
          title="My Account"
          description="Quality Assurance - Merchant Success"
          icon="home"
          breadcrumbs={[{
            href: "javascript:;",
            text: "Home"
          },{
            href: "javascript:;",
            text: "My Account"
          }]}
            />
        <React.Fragment>
          <UserDetails/>
          <WowCards/>
        </React.Fragment>
        </Page>

    )

}

export default Dashboard;