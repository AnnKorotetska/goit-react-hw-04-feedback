import PropTypes from 'prop-types';
import { Title } from './NotificationStyled';

export const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
