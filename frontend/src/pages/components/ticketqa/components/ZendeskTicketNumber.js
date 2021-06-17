import React from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import InputField from '@bold-commerce/bevy-react/lib/components/inputfield/InputField';

function ZendeskTicketNumber() {
    return (
        <Card.Section>
            <Grid>
                <Grid.Half>
                    <InputField
                        className="ticket-number-input"
                        label="Zendesk Ticket Number"
                        type="text"
                        placeholder="ie. 123456"
                        prefix="#"
                        helpText="Link is always appreciated, but if not please simply add the ticket number."
                        minLength="7"
                        maxLength="7"
                    />
                </Grid.Half>
                <Grid.Half>

                </Grid.Half>
            </Grid>
        </Card.Section>
    )
}
export default ZendeskTicketNumber;