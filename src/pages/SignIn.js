import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';

import {
  Container,
  Food,
  Header,
  Food2,
  Content,
  InputContainer,
  Input,
  LastContainer,
  ButtonContainer,
  Button,
} from '~/styles/signin';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const passwordRef = useRef();

  return (
    <Container>
      <Food source={require('~/images/food.png')} />
      <Header>
        <Title fontSize="20px" color={colors.darker} marginBottom={15}>
          Bem vindo ao
        </Title>
        <Image
          source={require('~/images/logo-main.png')}
          width="136px"
          height="172px"
        />
      </Header>
      <Food2 source={require('~/images/food-2.png')} />

      <Content>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{
            flex: 1,
          }}
        >
          <InputContainer>
            <Text marginLeft={20}>E-mail</Text>
            <Input
              maxLength={8}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={(text) => {
                setEmail(text.trim());
              }}
            />
          </InputContainer>

          <InputContainer>
            <Text marginLeft={20}>Password</Text>
            <Input
              ref={passwordRef}
              returnKeyType="done"
              onSubmitEditing={() => {}}
              value={password}
              onChangeText={(text) => {
                setPassoword(text.trim());
              }}
              secureTextEntry
            />
          </InputContainer>

          <LastContainer>
            <ButtonContainer>
              <Button onPress={() => navigation.navigate('Dashboard')}>
                <Title>Entrar</Title>
              </Button>

              <Text alignSelf="center" marginTop={10} marginBottom={10}>
                Ou
              </Text>

              <Button
                style={{ alignSelf: 'center' }}
                width={40}
                backgroundColor={colors.yellow}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text color={colors.white}>Cadastre-se</Text>
              </Button>
            </ButtonContainer>

            <Text color={colors.plate} textAlign="center">
              Ao continuar, você aceita nossos {'\n'}
              <Text>Termos e condições</Text>
            </Text>
          </LastContainer>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};

export default SignIn;
