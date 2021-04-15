import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';


function QualityScore() {
    return(
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
  </Grid>
  </React.Fragment>
    )
}
export default QualityScore;