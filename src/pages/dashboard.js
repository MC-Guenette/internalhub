import React from 'react';
import QualityScore from './components/dashboard/qualityscore';
import TicketSummary from './components/dashboard/ticketsummary';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import './dashboard.css';

  
function Dashboard() {
    return(
        <Page>
        <Page.Header
          title="Dashboard"
          description="Quality Assurance - Merchant Success"
          icon="home"
          breadcrumbs={[{
            href: "javascript:;",
            text: "Home"
          },{
            href: "javascript:;",
            text: "Dashboard"
          }]}
            />
        <React.Fragment>
        <QualityScore/>
        <Grid>
      <TicketSummary/>
        </Grid>
        </React.Fragment>
        </Page>

    )

}

export default Dashboard;