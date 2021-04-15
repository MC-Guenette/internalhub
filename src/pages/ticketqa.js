import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import InputField from '@bold-commerce/bevy-react/lib/components/inputfield/InputField';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import Button from '@bold-commerce/bevy-react/lib/components/button/Button';
<Page.AnnotatedSegment
title="Account information"
details="This information is all related, but needs a bit of separation because there's a bit of difference between the email address and the passwords sections."
>
<Card sectioned>
  <Card.Section>
    <h3>Log-in details</h3>
    <InputField label="Email address" />
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