import React, { useState, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform } from 'react-native';
import SvgUri from 'expo-svg-uri';
import { translate } from '~/locales';
import {
  Container,
  Header,
  BackButton,
  Content,
  StepButtonContainer,
  StepButton,
  Hr,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  ModalBox,
  ModalContainer,
  ModalContent,
  SelectContainer,
} from '~/styles/signup';
import { Title, Text } from '~/styles/global/general';
import { colors, metrics } from '~/styles/global';

import ConfirmMessage from '~/components/ConfirmMessage';

const options = [
  {
    index: 0,
    value: 'skip',
    title: 'modalAddAddress.step',
  },
  {
    index: 1,
    value: 'register',
    title: 'modalAddAddress.register',
  },
];

const SignUp = ({ navigation }) => {
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [enableStepButton, setEnableStepButton] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const neighborhoodRef = useRef();
  const cityRef = useRef();

  const translatedOptions = options.map((item) => {
    const result = {
      ...item,
      title: translate(item.title),
    };
    return result;
  });

  const openModal = () => {
    setIsVisible(!isVisible);
  };

  const openModalMessage = () => {
    setIsVisible2(!isVisible2);
  };

  const onSubmit = () => {
    navigation.navigate('Dashboard');
  };

  const resultSubmit = (value) => {
    openModal();

    if (value === 'register') {
      setEnableStepButton(true);
      return setPosition(1);
    }

    openModalMessage();
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
            {translate('pageSignIn.title')}
          </Title>

          {enableStepButton && (
            <StepButtonContainer>
              <StepButton
                onPress={() => setPosition(0)}
                backgrounColor={position === 0 && colors.yellow}
                disabled={position === 0 && true}
              />
              <Hr />
              <StepButton
                onPress={() => setPosition(1)}
                backgrounColor={position === 1 && colors.yellow}
                disabled={position === 1 && true}
              />
            </StepButtonContainer>
          )}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{
              flex: 1,
            }}
          >
            {position === 0 && (
              <>
                <InputContainer>
                  <Text>{translate('pageSignIn.name')}</Text>
                  <Input
                    maxLength={8}
                    returnKeyType="next"
                    onSubmitEditing={() => emailRef.current.focus()}
                    value={name}
                    onChangeText={(text) => {
                      setName(text.trim());
                    }}
                  />
                </InputContainer>

                <InputContainer>
                  <Text>{translate('pageSignIn.email')}</Text>
                  <Input
                    ref={emailRef}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current.focus()}
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                  />
                </InputContainer>

                <InputContainer>
                  <Text>{translate('pageSignIn.password')}</Text>
                  <Input
                    ref={passwordRef}
                    returnKeyType="done"
                    onSubmitEditing={() => {}}
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text.trim());
                    }}
                    secureTextEntry
                  />
                </InputContainer>
              </>
            )}

            {position === 1 && (
              <>
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
                    keyboardType="numeric"
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
              </>
            )}
          </KeyboardAvoidingView>

          <ButtonContainer>
            <Button
              onPress={() => {
                position === 0 && enableStepButton === true
                  ? setPosition(1)
                  : position === 1
                  ? openModalMessage()
                  : openModal();
              }}
            >
              <Title>
                {position === 0
                  ? translate('pageSignIn.next')
                  : translate('pageAddAddress.btnRegister')}
              </Title>
            </Button>
          </ButtonContainer>

          <ButtonContainer
            flexDirection="row"
            alignItems="center"
            style={{ marginBottom: 60 }}
          >
            <Text color={colors.plate} textAlign="center">
              {translate('pageSignIn.isHavaAccount')}
            </Text>
            <Button
              onPress={() => navigation.navigate('SignIn')}
              width={40}
              backgrounColor={colors.transparent}
              style={{ marginLeft: -15 }}
            >
              <Text color={colors.blue}>{translate('pageSignIn.doLogin')}</Text>
            </Button>
          </ButtonContainer>
        </Content>
      </Container>

      {isVisible && (
        <ModalBox
          isOpen={isVisible}
          useNativeDriver={false}
          coverScreen
          entry="bottom"
          position="bottom"
          swipeToClose
          swipeArea={100}
          swipeThreshold={150}
          backButtonClose={false}
          onClosed={() => openModal()}
          backdrop
          backdropPressToClose
        >
          <ModalContainer>
            <Title
              fontSize="20px"
              alignSelf="center"
              textAlign="center"
              color={colors.darker}
              marginTop={30}
              marginBottom={10}
            >
              {translate('modalAddAddress.text')}
            </Title>

            <ModalContent>
              {translatedOptions.map((item) => (
                <SelectContainer
                  key={item.index}
                  onPress={() => resultSubmit(item.value)}
                  padding={10}
                  marginVertical={3}
                >
                  <Title color={colors.darker} marginLeft={20}>
                    {item.title}
                  </Title>

                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={40}
                    color={colors.darker}
                  />
                </SelectContainer>
              ))}
            </ModalContent>
          </ModalContainer>
        </ModalBox>
      )}

      {isVisible2 && (
        <ConfirmMessage
          onClosed={openModalMessage}
          onSubmit={onSubmit}
          title={translate('modalAddAddressSucess.title')}
          message={translate('modalAddAddressSucess.desc')}
          timeout
        />
      )}
    </>
  );
};

export default SignUp;
