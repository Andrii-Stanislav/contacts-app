import React from 'react';
import styled from 'styled-components';

const AlertStyled = styled.div`
  position: absolute;
  top: 100px;
  right: 15px;
  width: 220px;
  padding: 15px;
  border-radius: 3px;
  background-color: rgb(255, 111, 111);
`;

export default function Alert({ text }) {
  return <AlertStyled>{text}</AlertStyled>;
}
