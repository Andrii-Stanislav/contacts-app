import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getdarkTheme } from '../../redux/theme/theme';

const StyledMainContainer = styled.div`
  padding: 10px;
  background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
`;

const StyledContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin: 5px auto;
  padding: 30px 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px grey;
  overflow: hidden;
  background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export default function Container({ children }) {
  const darkTheme = useSelector(getdarkTheme);

  return (
    <StyledMainContainer darkTheme={darkTheme}>
      <StyledContainer darkTheme={darkTheme}>{children}</StyledContainer>
    </StyledMainContainer>
  );
}
