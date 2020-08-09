import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    position:absolute;
    bottom: 35px;

    align-self: center;
    justify-content: flex-end;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

const Icon = Styled.Image``;

const AddButton = ({onPress}) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('~/Assets/Images/add.png')} />
      </ButtonContainer>
    </Container>
  );
};

export default AddButton;
