import React from 'react';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import QaForm from './components/ticketqa/qaform';

function TicketQa() {
  return(
      <Page>
      <Page.Header
        title="Ticket QA"
        description="Quality Assurance - Merchant Success"
        icon="edit"
        breadcrumbs={[{
          href: "javascript:;",
          text: "Home"
        },{
          href: "javascript:;",
          text: "Ticket QA"
        }]}
          />
<QaForm/>
      </Page>
  )
}

export default TicketQa;
