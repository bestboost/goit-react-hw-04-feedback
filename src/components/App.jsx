import React, { useState } from 'react';
import { Box } from '../components/Box';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Section from 'components/Title/SectionTitle';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackKey = { good, neutral, bad };
  const keys = Object.keys({ ...feedbackKey });

  const handleAdd = feedbackKey => {
    switch (feedbackKey) {
      case 'good':
        return setGood(good + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
        throw new Error(`Unsupported action type`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = good + neutral + bad;
    return Math.round((good * 100) / total) || 0;
  };

  const total = countTotalFeedback();

  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleAdd} />
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Box>
  );
}
