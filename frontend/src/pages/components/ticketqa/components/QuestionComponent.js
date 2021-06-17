import React, { useState, state } from 'react';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Grid from '@bold-commerce/bevy-react/lib/components/grid/Grid';
import Button from '@bold-commerce/bevy-react/lib/components/button/Button';
import RadioField from '@bold-commerce/bevy-react/lib/components/radiofield/RadioField';
import TextareaField from '@bold-commerce/bevy-react/lib/components/textareafield/TextareaField';
import IconButton from '@bold-commerce/bevy-react/lib/components/iconbutton/IconButton';

export default function QuestionComponent(props) {
    const [showAddComment, setShowAddComment] = useState(false);

    function showComment() {
        setShowAddComment(!showAddComment);
    }

    function renderAddComment() {
        if (showAddComment) {
            return (
                <div>
                    <h3>Comments</h3>
                    <TextareaField
                        helpText="Details and examples are important"
                        placeholder="Write a comment"
                    />
                </div>
            )
        }
    }

    function renderAddCommentButton() {
        if (showAddComment) {
            return (
                <IconButton
                    icon="plusCircle"
                    activeIcon="timesCircleOutline"
                    active={true}
                    accessibilityLabel="expanding toggle"
                    onClick={showComment}
                />
            )
        } else {
            return (
                <Button
                    secondary
                    onClick={showComment}>
                    Add Comment
                </Button>
            )
        }
    }

    console.log(props.title);
    return (
        <Card.Section>
            <Grid>
                <Grid.Half>
                    <h3 className="question_helptext">{props.title}</h3>
                    <p className="question_helptext bv-field__help-text">{props.helpText}</p>
                    <RadioField
                        label="Yes"
                    />
                    <RadioField
                        label="No"
                    />
                    <RadioField
                        label="Not Applicable"
                    />
                </Grid.Half>
                <Grid.Half>
                    <div className="addcomment_wrapper">
                        {renderAddCommentButton()}
                    </div>
                    {renderAddComment()}
                </Grid.Half>
            </Grid>
        </Card.Section>
    )
}
