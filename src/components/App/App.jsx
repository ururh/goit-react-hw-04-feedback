import React, {Component} from 'react'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Content } from './App.module';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  leaveFeedback = (e) => {
    const option= e.toLowerCase()
    this.setState(prevState => (
       { [option]: prevState[option] + 1 }
    ));
  }

  total = () => {
    const { good, neutral, bad } = this.state
    return good+neutral+bad
  }

  positivePercentage = () => {
    const { good, neutral, bad } = this.state
    return Number.parseInt(good * 100 / (good + neutral + bad)) || 0;
}

  render() {
    const { good, neutral, bad } = this.state;
    return(
      <Content>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good','Neutral','Bad']}
            onLeaveFeedback={this.leaveFeedback } />
        </Section>
        <Section title="Statistics">
          {this.total() !== 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={this.total()} positivePercentage={this.positivePercentage()} />) : (<Notification message="There is no feedback"></Notification>)}
          </Section> 
        
      </Content>
    );
  }
}
