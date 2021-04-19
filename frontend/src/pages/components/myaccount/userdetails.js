import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import Pill from '@bold-commerce/bevy-react/lib/components/pill/Pill';


const Team = (props) => {

    //team
    const types = {
      'Tier 2': 'success',
      'PRE': 'alert',
      'Checkout': 'warning',
      'SMB Applications': 'alert'
    };
  
    if (props.type) {
      return (
        <Pill status={ types[props.type] } label={ props.type } />
      )
    }
    return null;
}

const Department = (props) => {

    //department
    const types = {
      'Merchant Success': 'success',
      'Developer': 'alert'
    };
  
    if (props.type) {
      return (
        <Pill status={ types[props.type] } label={ props.type } />
      )
    }
    return null;
}

function UserDetails() {
    return(

<Grid.Full>
    <Card className="userDetails">
        <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c198f7dd-1710-4d24-b38a-540d9747e381/469460d6-c9a4-4ac5-bb24-c89d5c81cfdb/128" class="userPhoto"></img>
        <h3>Julian V.</h3>
        <div><Department type={'Developer'} /><Team type={'SMB Applications'} /></div>
    </Card>
</Grid.Full>

    )}
    export default UserDetails;