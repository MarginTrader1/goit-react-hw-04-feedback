import { useState } from 'react';

import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistic';
import { Feedback } from './FeedBackOptions/FeedBackOptions';
import { Notification } from './Notification/Notification';

// делаем хуки под кнопки
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

  return (
    <>
      <SectionTitle title="Please leave feedback">
        <Feedback
          // в пропс передаем объект, чтобы по ключам его перебрать
          data={{ good: good, neutral: neutral, bad: bad }}
          addFeedback={addFeedback}
        />
      </SectionTitle>

      {/* тернарник -> если есть фидбэки -> рендерим компонент Statistics*/}
      {good > 0 || neutral > 0 || bad > 0 ? (
        <SectionTitle title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbackFunctions.total}
            positivePercentage={feedbackFunctions.positivePercentage}
          />
        </SectionTitle>
      ) : (
        // если фидбэков нет -> рендерим компонент Notification
        <SectionTitle>
          <Notification title="There is no feedback" />
        </SectionTitle>
      )}
    </>
  );
};
