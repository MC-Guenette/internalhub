import React from 'react';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import InputField from '@bold-commerce/bevy-react/lib/components/inputfield/InputField';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';

function QaForm() {
    return(
<Page.AnnotatedSegment
title="Zendesk ticket information"
details="This information is all related, but needs a bit of separation because there's a bit of difference between the email address and the passwords sections."
>
<Card sectioned>
  <Card.Section>
    <h3>Submit a Ticket</h3>
    <InputField placeholder="ie. #123456" label="Zendesk Ticket Number" helpText="This is help text, useful for giving hints or extra instructions" />
  </Card.Section>
  <Card.Section>
    <h3>Reset password</h3>
    <Grid>
      <Grid.Half>
        <InputField label="Password" type="password" />
      </Grid.Half>
      <Grid.Half>
        <InputField label="Confirm password" type="password" />
      </Grid.Half>
    </Grid>
  </Card.Section>
</Card>
</Page.AnnotatedSegment>
    )
}

export default QaForm;