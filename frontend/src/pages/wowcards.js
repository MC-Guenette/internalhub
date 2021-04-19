import React from 'react';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import WowCardTable from '../pages/components/myaccount/wowcardstable';

function WowCards() {
  return(
      <Page>
      <Page.Header
        title="Wow Cards - Hall of Fame"
        icon="ticket"
        breadcrumbs={[{
          href: "javascript:;",
          text: "My Account"
        },{
          href: "javascript:;",
          text: "Wow Cards"
        }]}
          />
<WowCardTable/>
      </Page>
  )
}

export default WowCards;
