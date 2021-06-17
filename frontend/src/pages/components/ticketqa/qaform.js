import React from 'react';
import Page from  '@bold-commerce/bevy-react/lib/components/page/Page';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import InputField from '@bold-commerce/bevy-react/lib/components/inputfield/InputField';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import Field from '@bold-commerce/bevy-react/lib/components/field/Field';
import Input from '@bold-commerce/bevy-react/lib/components/input/Input';

function QaForm() {
    return(
<Page.AnnotatedSegment
title="Zendesk ticket information"
details="This information is all related, but needs a bit of separation because there's a bit of difference between the email address and the passwords sections."
>
<Card sectioned>
  <Card.Section>
    <h3>Ticket QA Form</h3>
    <InputField placeholder="ie. #123456" label="Zendesk Ticket Number" helpText="This is help text, useful for giving hints or extra instructions" />
  </Card.Section>
  <Card.Section>
    <h3>Ticket Summary</h3>
    <Grid>
      <Grid.Half>
        <InputField label="Question1" placeholder="Some text here" />
      </Grid.Half>
      <Grid.Half>
        <InputField label="Question2" placeholder="Some text here" />
      </Grid.Half>
    </Grid>
  </Card.Section>
  <Card.Section>  <Field
  label="Label Ipsum"
  helpText="Help text ipsum dolor sit"
  className="custom-field"
>

  { /* Styling would be handled through classNames */ }

  <div className="custom-field__element-wrapper">
    <Input className="custom-field__element1" placeholder="Custom" />
    <Input className="custom-field__element2" placeholder="field" />
  </div>

</Field></Card.Section>
</Card>

</Page.AnnotatedSegment>
    )
}

export default QaForm;