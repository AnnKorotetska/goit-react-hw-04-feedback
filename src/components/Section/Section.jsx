import PropTypes from 'prop-types';
import { SectionEl, Title } from './SectionStyled';

export const Section = ({ children, title }) => {
  return (
    <SectionEl>
      <Title>{title && <h2>{title}</h2>}</Title>
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
