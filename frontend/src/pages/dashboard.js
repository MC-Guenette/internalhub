import React from 'react';
import QualityScore from './components/dashboard/qualityscore';
import TicketSummary from './components/dashboard/ticketsummary';
import Page from '@bold-commerce/bevy-react/lib/components/page/Page';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import './dashboard.css';
import { API_BASE_URL } from '../config.js'


function Dashboard() {
  getTeams();
  return (
    <Page>
      <Page.Header
        title="Dashboard"
        description="Quality Assurance - Merchant Success"
        icon="home"
        breadcrumbs={[{
          href: "javascript:;",
          text: "Home"
        }, {
          href: "javascript:;",
          text: "Dashboard"
        }]}
      />
      <React.Fragment>
        <QualityScore />
        <Grid>
          <TicketSummary />
        </Grid>
      </React.Fragment>
    </Page>

  )

}

async function getTeams() {
  const response = await fetch(API_BASE_URL + '/teams', {

  });

  const teamsList = await response.json();
  debugger;
}

export default Dashboard;