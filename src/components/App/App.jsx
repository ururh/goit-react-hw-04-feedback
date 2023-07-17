import React, { useState} from 'react'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Content } from './App.module';
import Notification from 'components/Notification/Notification';

const App =()=>{

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const leaveFeedback = (option) => {
    if (option === 'Good') {
      setGood(prevGood => prevGood + 1);
    } else if (option === 'Neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (option === 'Bad') {
      setBad(prevBad => prevBad + 1);
    }
  }

const total = good+neutral+bad
  

const positivePercentage =  Number.parseInt(good * 100 / (good + neutral + bad)) || 0;
    return(
      <Content>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good','Neutral','Bad']}
            onLeaveFeedback={leaveFeedback } />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />) :
            (<Notification message="There is no feedback"></Notification>)}
          </Section> 
        
      </Content>
    ); 
}
export default App;