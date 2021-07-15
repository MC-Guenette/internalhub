import React, { useState, Component, useReducer } from 'react';
import Page from '@bold-commerce/bevy-react/lib/components/page/Page';
import Card from '@bold-commerce/bevy-react/lib/components/card/Card';
import Button from '@bold-commerce/bevy-react/lib/components/button/Button';
import ZendeskTicketNumber from './components/ZendeskTicketNumber';
import QuestionComponent from './components/QuestionComponent';
const radioValues = {
  questionOne: {
    answer: '',
    comment: '',
  }
}

function QaForm() {
  const [questionValues, setQuestionValues] = useState(radioValues);

  function handleRadioChange(question, value) {
    setQuestionValues({ ...questionValues, [question]: { answer: value } });
  }


  return (
    <Page.AnnotatedSegment
      title="Zendesk Ticket QA Questionnaire"
      details="Please fill out the form as best as you can as we've tried to keep things as simple as possible. There are comment fields for each question in case you would like to add more information and clarification. "
    >
      <Card sectioned>
        <form >
          <ZendeskTicketNumber />
          <QuestionComponent
            title="1. Solved the customer’s issue?"
            question="questionOne"
            helpText="Can also be a purchase or receiving the desired information"
            onRadioSelect={handleRadioChange}
          />
          <QuestionComponent
            title="2. Did you follow the outlined processes (where applicable) to effectively resolve the merchant’s issue?"
            question="questionTwo"
            helpText="Ex. Did you check for previous tickets and link them if required, send HC articles (etc.)"
            onRadioSelect={handleRadioChange}
          />
          <QuestionComponent
            title="3. Used positive greeting, addressing customer by name (when possible) + offered support right away?"
            helpText="Ex. did you build rapport with the merchant?"
          />
          <QuestionComponent
            title="4. Used positive, direct language throughout the interaction?"
            helpText="Ex. Was your communication clear and easy to understand"
          />
          <QuestionComponent
            title="5. Explained in clear and simple terms, avoided using technical jargon unless necessary."
            helpText="Ex. steps taken to resolve the issue, etc."
          />
          <QuestionComponent
            title="6. Exercised active listening?"
            helpText="Ex. acknowledged concerns, etc."
          />
          <QuestionComponent
            title="7. Were you respectful of the merchant’s time?"
            helpText="Ex. Provided realistic timelines to the merchant, If in chat: were you quick to answer and if you needed more time, did you let the merchant know?"
          />
          <QuestionComponent
            title="8. Provided adequate explanation of what the next steps are toward a potential resolution?"
            helpText="Ex. ADD HERE"
          />
          <QuestionComponent
            title="9. Took ownership throughout the interaction, where applicable/appropriate?"
            helpText="Ex. ADD HERE."
          />
          <QuestionComponent
            title="10. Did you talk to the merchant “in their language”?"
            helpText="Ex. Appropriate tone/urgency, were you direct?"
          />
          <QuestionComponent
            title="11. Did you acknowledge all of their concerns?"
            helpText="Ex. Did you show empathy in regards to their concerns if they shared their frustrations?"
          />
          <QuestionComponent
            title="12. Grammar and spelling"
            helpText="ADD HERE"
          />
          <QuestionComponent
            title="13. Did you display product knowledge?"
            helpText="Ex. Did you ask for all necessary information from the merchant to be able to identify and resolve the issue"
          />
          <QuestionComponent
            title="14. If applicable, did you request a rating/5 star?"
            helpText="ADD HERE"
          />
          <QuestionComponent
            title="15. Did they respond after the issue was resolved?"
            helpText="Ex. Did the merchant come back with the same problem?"
          />
          <React.Fragment>
            <Card.Section>
              <Button secondary type="submit">Submit Ticket</Button>
            </Card.Section>
          </React.Fragment>
        </form>
      </Card>
    </Page.AnnotatedSegment >
  )
}

export default QaForm;