import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Notifications/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = review => {
    this.setState(prevState => ({
      [review]: prevState[review] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => (acc += value), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round(this.state.good / (this.countTotalFeedback() / 100));

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ?
            <Statistics good={good} neutral={neutral} bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} /> :
            <Notification message='No feedback given'/> }
        </Section>
      </>
    );
  }
}