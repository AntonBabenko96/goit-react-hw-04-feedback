import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from '../components/Section/Section';
import { Notification } from './Notification/Notification';

import css from '../components/App.module.css';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = name => {
    setState(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100) || 0;

  return (
    <div className={css.section}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          leaveFeedback={leaveFeedback}
          options={Object.keys(state)}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </div>
  );
};
