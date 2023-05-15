import PropTypes from 'prop-types';
import { Options, Button } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      {options.map(option => (
        <li key={option}>
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option.toLowerCase())}
          >
            {option}
          </Button>
        </li>
      ))}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
