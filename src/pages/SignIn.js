import React, { useState, useRef } from 'react';
import { CommonActions } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '~/locales';
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
import api from '~/services/axios';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const passwordRef = useRef();

  async function setData(key, value) {
    AsyncStorage.setItem(`@${key}`, value);
  }

  const redirect = () => {
    api
      .post('users/autenticar', {
        Texto: 'arlanmendes@gmail.com',
        Senha: 'Arl@n123',
      })
      .then((x) => {
        if (x.data.autenticado) {
          setData('@userNome', x.data.user.Nome);
          setData('@userEmail', x.data.user.Email);

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            }),
          );
        }
      });
  };

  return (
    <Container>
      <Food source={require('~/images/food.png')} />
      <Header>
        <Title fontSize="20px" color={colors.darker} marginBottom={15}>
          {translate('pageLogin.welcome')}
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
            <Text marginLeft={20}>{translate('pageLogin.email')}</Text>
            <Input
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={(text) => {
                setEmail(text.trim());
              }}
            />
          </InputContainer>

          <InputContainer>
            <Text marginLeft={20}>{translate('pageLogin.password')}</Text>
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
              <Button onPress={() => redirect()}>
                <Title>{translate('pageLogin.btnEnter')}</Title>
              </Button>

              <Text alignSelf="center" marginTop={10} marginBottom={10}>
                {translate('pageLogin.or')}
              </Text>

              <Button
                style={{ alignSelf: 'center' }}
                width={40}
                backgroundColor={colors.yellow}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text color={colors.white}>
                  {translate('pageLogin.btnSignin')}
                </Text>
              </Button>
            </ButtonContainer>

            <Text color={colors.plate} textAlign="center">
              {translate('pageLogin.termo')}
              {'\n'}
              <Text>{translate('pageLogin.termo2')}</Text>
            </Text>
          </LastContainer>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};

export default SignIn;
