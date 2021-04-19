import React from 'react';
import UserDetails from './userdetails';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import './myaccount.css';
import Activity from './activity';

  
function Profile() {
    return(
        <Page>
        <Page.Header
          title="Profile"
          icon="person"
          breadcrumbs={[{
            href: "javascript:;",
            text: "My Account"
          },{
            href: "javascript:;",
            text: "Profile"
          }]}
            />
        <React.Fragment>
          <UserDetails/>
          <Activity/>
        </React.Fragment>
        </Page>

    )

}

export default Profile;