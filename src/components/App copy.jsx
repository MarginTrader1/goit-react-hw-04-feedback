import { Component } from 'react';

import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistic';
import { Feedback } from './FeedBackOptions/FeedBackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const positivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100
    );
    return positivePercentage;
  };

  // метод изменение state
  addFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    // проверяем значения state во время рендера компонентов, если есть фидбэки -> рендерим статистику фидбэков
    if (good > 0 || neutral > 0 || bad > 0) {
      return (
        <>
          <SectionTitle title="Please leave feedback">
            <Feedback data={this.state} addFeedback={this.addFeedback} />
          </SectionTitle>
          <SectionTitle title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </SectionTitle>
        </>
      );
      // если фидбэков нет -> рендерим компонент Notification
    } else {
      return (
        <>
          <SectionTitle title="Please leave feedback">
            <Feedback data={this.state} addFeedback={this.addFeedback} />
          </SectionTitle>
          <SectionTitle>
            <Notification title="There is no feedback" />
          </SectionTitle>
        </>
      );
    }
  }
}
