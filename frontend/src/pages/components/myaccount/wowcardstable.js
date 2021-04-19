import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import data from './data/wowcardsdata';
import DataTable from '@bold-commerce/bevy-react/lib/components/datatable/DataTable';
import Pill from '@bold-commerce/bevy-react/lib/components/pill/Pill';
import BoldLogo from '/Users/mc.guenette/internalhub/frontend/src/logo.svg';

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
          <div className="wow_writter"> <p><img src={BoldLogo} alt="React Logo" />{ row.sender }</p></div>
        </React.Fragment>
      )
    },{
        renderCell: (row) => (
            <React.Fragment>
              <div className="wow_details">{ row.message }</div>
        <div><strong>{row.date}</strong></div>
        <Wow type={row.status} />
            </React.Fragment>
          )
    }
  ];

function WowCardTable() {
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
    export default WowCardTable;