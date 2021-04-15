import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import Pill from '@bold-commerce/bevy-react/lib/components/pill/Pill';
import data from '@bold-commerce/bevy-react/docs/data/people';
import DataTable from '@bold-commerce/bevy-react/lib/components/datatable/DataTable';

import './dashboard.css';
const Status = (props) => {
    const types = {
      'alive': 'success',
      'missing': 'alert',
      'vacation': 'warning',
      'unknown': null
    };
  
    if (props.type) {
      return (
        <Pill status={ types[props.type] } label={ props.type } />
      )
    }
    return null;
  }
  const columns = [
    {
      header: "Executive",
      renderCell: (row) => (
        <React.Fragment>
          <div className="executive__name"><strong>{ row.name }</strong></div>
          <div className="executive__title"><small>{ row.title }</small></div>
        </React.Fragment>
      )
    },{
      header: "Email",
      dataKey: "email"
    },{
      header: "Status",
      renderCell: (row) => (
        <Status type={row.status} />
      )
    }
  ];
  
function Dashboard() {
    return(
        <Page>
        <Page.Header
          title="Dashboard"
          description="Page description dolor sit amet."
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
        <Grid className="grid-examples-demo">
  <Grid.Third>
    <Card>
      <h2>Current Quality Score</h2>
      <h3 style={{color: "#5ED920"}}>80.2%</h3>
      <p>Previous 7 days: 79.1%</p>
    </Card>
  </Grid.Third>

  <Grid.Third>
    <Card>
      <h2>Ticket Quality Score</h2>
      <h3 style={{color: "#5ED920"}}>88.5%</h3>
      <p>Previous 7 days: 87.1%</p>
    </Card>
  </Grid.Third>

  <Grid.Third>
    <Card>
      <h2>Chat Quality Score</h2>
      <h3 style={{color: "#5ED920"}}>78.2%</h3>
      <p>Previous 7 days: 79.9%</p>
    </Card>
  </Grid.Third>

  <Grid.Full>
    <Card>
      <h2>Ticket Summary</h2>
      <p>Discount shopify customer merchant bundle brain conversion social autopilot motivator.</p>
<Card>
  <DataTable
    columns={ columns }
    data={ data }
  />
</Card>
    </Card>
  </Grid.Full>
</Grid>
        </React.Fragment>
        </Page>
    )

}

export default Dashboard;