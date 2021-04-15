import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import data from '@bold-commerce/bevy-react/docs/data/people';
import DataTable from '@bold-commerce/bevy-react/lib/components/datatable/DataTable';
import Pill from '@bold-commerce/bevy-react/lib/components/pill/Pill';

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
function TicketSummary() {
    return(

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

    )}
    export default TicketSummary;