import styled from '@emotion/styled';

export const Options = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid grey;
  padding: 10px;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  &:active {
    background-color: #4090e6;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;
