import React from 'react';
import SvgUri from 'expo-svg-uri';
import { Platform, Dimensions } from 'react-native';
import {
  ModalBox,
  ModalContainer,
  ModalContent,
  ButtonContainer,
  Button,
} from '~/styles/components/confirmmessage';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

const ConfirmMessage = ({
  timeout,
  onClosed,
  title,
  message,
  onSubmit,
  onSubmitTitle,
  existButtons,
}) => {
  if (timeout) {
    setTimeout(() => {
      onSubmit();
      onClosed();
    }, 4000);
  }

  return (
    <ModalBox
      isOpen
      useNativeDriver={false}
      coverScreen
      entry="bottom"
      position="bottom"
      swipeToClose
      swipeArea={100}
      swipeThreshold={150}
      backButtonClose={false}
      onClosed={() => onClosed()}
      backdrop
      backdropPressToClose
      height={
        Platform.OS == 'ios'
          ? Dimensions.get('screen').height * 0.9
          : Dimensions.get('screen').height * 0.89
      }
    >
      <ModalContainer>
        <SvgUri
          source={require('~/images/done.svg')}
          width="182px"
          height="182px"
        />

        <Title
          fontSize="50px"
          marginTop={20}
          marginBottom={20}
          color={colors.darker}
        >
          {title}
        </Title>
        <Text
          fontSize="20px"
          marginLeft={45}
          marginRight={45}
          textAlign="center"
        >
          {message}
        </Text>

        {existButtons && (
          <ModalContent>
            <ButtonContainer>
              <Button onPress={() => [onSubmit(), onClosed()]}>
                <Title>{onSubmitTitle}</Title>
              </Button>
            </ButtonContainer>
          </ModalContent>
        )}
      </ModalContainer>
    </ModalBox>
  );
};

export default ConfirmMessage;
