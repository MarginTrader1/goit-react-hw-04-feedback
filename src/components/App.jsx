import { useState } from 'react';

import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistic';
import { Feedback } from './FeedBackOptions/FeedBackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // создаем обьект функций под хуки
  const feedbackFunctions = {
    good: () => setGood(prevGood => prevGood + 1),
    neutral: () => setNeutral(prevNeutral => prevNeutral + 1),
    bad: () => setBad(prevBad => prevBad + 1),
    total: () => {
      return good + neutral + bad;
    },
    positivePercentage: () => {
      return Math.round((good / (good + neutral + bad)) * 100);
    },
  };

  // создаем функцию addFeedback, которая по велью вызывает соответствующую функцию из объекта функций
  const addFeedback = value => feedbackFunctions[value]();

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <Feedback
            data={{ good: good, neutral: neutral, bad: bad }}
            addFeedback={addFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbackFunctions.total}
            positivePercentage={feedbackFunctions.positivePercentage}
          />
        </SectionTitle>
      </>
    );
    // если фидбэков нет -> рендерим компонент Notification
  } else {
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <Feedback
            data={{ good: good, neutral: neutral, bad: bad }}
            addFeedback={addFeedback}
          />
        </SectionTitle>
        <SectionTitle>
          <Notification title="There is no feedback" />
        </SectionTitle>
      </>
    );
  }
};
