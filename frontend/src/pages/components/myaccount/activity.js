import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import data from '@bold-commerce/bevy-react/docs/data/people';
import DataTable from '@bold-commerce/bevy-react/lib/components/datatable/DataTable';
import Pill from '@bold-commerce/bevy-react/lib/components/pill/Pill';


const Wow = (props) => {
  const types = {
    'Belong': 'success',
    'Understand': 'success',
    'Innovate': 'success',
    'Learn': 'success',
    'Deliver': 'success',
    'Elevate': 'success',
    'Respect': 'success',
    'Serve Others First': 'success'
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
      renderCell: (row) => (
        <React.Fragment>
          <div className="wow_writter"><small>{ row.name }</small></div>
        </React.Fragment>
      )
    },{
        renderCell: (row) => (
            <React.Fragment>
              <div className="wow_details">{ row.email }</div>
              <Wow type="Deliver" />
              <div>April.1 2021</div>
            </React.Fragment>
          )
    }
  ];

function Activity() {
    return(

<Grid.Full>
    <Card className="wow_cards">
        <DataTable
            columns={ columns }
            data={ data }
        />
    </Card>
</Grid.Full>

    )}
    export default Activity;