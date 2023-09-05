import { List, Li, Button } from './FeedBackOptions.styled';
import { nanoid } from 'nanoid';

export const Feedback = ({ addFeedback, data }) => {
  return (
    <>
      <List>
        {Object.keys(data).map(key => (
          <Li key={nanoid()}>
            <Button type="button" onClick={() => addFeedback(key)}>
              {key}
            </Button>
          </Li>
        ))}
      </List>
    </>
  );
};
