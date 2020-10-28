import React, { useState, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform } from 'react-native';
import SvgUri from 'expo-svg-uri';
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
    title: 'Pular',
  },
  {
    index: 1,
    value: 'register',
    title: 'Cadastrar',
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
            Criar{'\n'}Conta
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
                  <Text>Name</Text>
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
                  <Text>E-mail</Text>
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
                  <Text>Password</Text>
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
                  <Text>CEP</Text>
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
                  <Text>Rua</Text>
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
                  <Text>Número</Text>
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
                  <Text>Bairro</Text>
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
                  <Text>Cidade</Text>
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
                position === 1 ? openModalMessage() : openModal();
              }}
            >
              <Title>{position === 0 ? `Avançar` : `Cadastrar`}</Title>
            </Button>
          </ButtonContainer>

          <ButtonContainer
            flexDirection="row"
            alignItems="center"
            style={{ marginBottom: 60 }}
          >
            <Text color={colors.plate} textAlign="center">
              Já possui conta?
            </Text>
            <Button
              onPress={() => navigation.navigate('SignIn')}
              width={40}
              backgrounColor={colors.transparent}
              style={{ marginLeft: -15 }}
            >
              <Text color={colors.blue}>Faça o login</Text>
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
              Deseja realizar o {'\n'} cadastro do endereço agora?
            </Title>

            <ModalContent>
              {options.map((item) => (
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
          title="Prontinho!"
          message="O seu cadastro foi realizado, estaremos te redirecionando para página inicial"
          timeout
        />
      )}
    </>
  );
};

export default SignUp;
