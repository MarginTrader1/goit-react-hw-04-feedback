import { Li } from './Statistic.styled';
import { nanoid } from 'nanoid';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <Li key={nanoid()}>
          <b>Good:</b> {good}
        </Li>
        <Li key={nanoid()}>
          <b>Neutral:</b> {neutral}
        </Li>
        <Li key={nanoid()}>
          <b>Bad:</b> {bad}
        </Li>
        <Li key={nanoid()}>
          <b>Total:</b> {total()}
        </Li>
        <Li key={nanoid()}>
          <b>Positive feedback:</b> {positivePercentage()}%
        </Li>
      </ul>
    </>
  );
};
