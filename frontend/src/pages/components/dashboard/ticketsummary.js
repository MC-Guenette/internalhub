import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import data from './data/ticketdata';
import DataTable from '@bold-commerce/bevy-react/lib/components/datatable/DataTable';
import Pill from '@bold-commerce/bevy-react/lib/components/pill/Pill';

const Status = (props) => {
    const types = {
      'assessed': 'success',
      'missing': 'alert',
      'received': 'warning',
      'closed': null
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
    header: "Status",
    renderCell: (row) => (
      <Status type={row.status} />
    )
  },
    {
      header: "Zendesk Ticket #",
      renderCell: (row) => (
        <React.Fragment>
          <div className="executive__name"><strong>{ row.ticket }</strong></div>
          <div className="executive__title"><small>{ row.rootcause }</small></div>
        </React.Fragment>
      )
    },
    {
      header: "Application",
      renderCell: (row) => (
        <React.Fragment>
          <div className="application_name"><strong>{ row.application }</strong></div>
        </React.Fragment>
      )
    },
    {
      header: "Assessed by",
      dataKey: "assessedby"
    }
  ];
function TicketSummary() {
    return(

  <Grid.Full>
    <Card>
      <h2>Ticket Summary</h2>
      <p>Filters here.</p>
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