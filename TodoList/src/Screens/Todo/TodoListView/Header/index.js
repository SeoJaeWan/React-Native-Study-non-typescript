import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    height: 40px;
    justify-content: center;
    align-items:center;

    background-color:#95a5a6;

    padding : 35px 0;
`;

const TitleLabel = Styled.Text`
    font-size: 30px;
    font-weight: bold;

    color:#FFF;
`;

const Header = ({}) => {
  return (
    <Container>
      <TitleLabel>ToDo List</TitleLabel>
    </Container>
  );
};

export default Header;
