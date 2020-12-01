import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import SvgUri from 'expo-svg-uri';
import { translate } from '~/locales';
import {
  Container,
  Header,
  BackButton,
  Content,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
} from '~/styles/newaddress';
import { Title, Text } from '~/styles/global/general';
import { colors, metrics } from '~/styles/global';

import ConfirmMessage from '~/components/ConfirmMessage';

const NewAddress = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');

  const streetRef = useRef();
  const numberRef = useRef();
  const neighborhoodRef = useRef();
  const cityRef = useRef();

  const openModalMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <SvgUri
              source={require('~/images/arrow-left.svg')}
              width="26px"
              height="40px"
            />
          </BackButton>
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <Title fontSize="35px" color={colors.darker} marginBottom={40}>
            {translate('pageAddAddress.title')}
          </Title>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{
              flex: 1,
            }}
          >
            <InputContainer>
              <Text>{translate('pageAddAddress.CEP')}</Text>
              <Input
                maxLength={8}
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => streetRef.current.focus()}
                value={cep}
                onChangeText={(text) => {
                  setCep(text.trim());
                }}
              />
            </InputContainer>

            <InputContainer>
              <Text>{translate('pageAddAddress.street')}</Text>
              <Input
                ref={streetRef}
                returnKeyType="next"
                onSubmitEditing={() => numberRef.current.focus()}
                value={street}
                onChangeText={(text) => {
                  setStreet(text);
                }}
              />
            </InputContainer>

            <InputContainer>
              <Text>{translate('pageAddAddress.number')}</Text>
              <Input
                ref={numberRef}
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => neighborhoodRef.current.focus()}
                value={number}
                onChangeText={(text) => {
                  setNumber(text.trim());
                }}
              />
            </InputContainer>

            <InputContainer>
              <Text>{translate('pageAddAddress.district')}</Text>
              <Input
                ref={neighborhoodRef}
                returnKeyType="next"
                onSubmitEditing={() => cityRef.current.focus()}
                value={neighborhood}
                onChangeText={(text) => {
                  setNeighborhood(text);
                }}
              />
            </InputContainer>

            <InputContainer marginBottom={Platform.OS == 'android' && 100}>
              <Text>{translate('pageAddAddress.city')}</Text>
              <Input
                ref={cityRef}
                returnKeyType="done"
                onSubmitEditing={() => {}}
                value={city}
                onChangeText={(text) => {
                  setCity(text);
                }}
              />
            </InputContainer>
          </KeyboardAvoidingView>
        </Content>

        <ButtonContainer>
          <Button onPress={() => openModalMessage()}>
            <Title>{translate('pageAddAddress.btnAdd')}</Title>
          </Button>
        </ButtonContainer>
      </Container>

      {isVisible && (
        <ConfirmMessage
          onClosed={openModalMessage}
          onSubmit={() => navigation.navigate('Address')}
          title={translate('modalAlterAddress.title')}
          message={translate('modalAlterAddress.desc')}
          timeout
        />
      )}
    </>
  );
};

export default NewAddress;
