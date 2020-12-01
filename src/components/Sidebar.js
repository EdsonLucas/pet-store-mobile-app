import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import SvgUri from 'expo-svg-uri';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate, setLanguageToI18n } from '~/locales';
import {
  Container,
  UserContainer,
  RightContainer,
  Content,
  Item,
  Hr,
  ModalBox,
  ModalContainer,
  ModalContent,
  SelectLanguageContainer,
} from '~/styles/components/sidebar';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';
import { logout } from '~/services/auth';

export default function Sidebar({ ...props }) {
  const [isVisible, setIsVisible] = useState();

  let data;

  useEffect(() => {
    async function getData() {
      data = await AsyncStorage.getItem('@userNome');
    }

    getData();
    console.log(data);
  }, [data]);

  const redirect = () => {
    logout();

    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Welcome' }],
      }),
    );
  };

  const openModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container>
        <UserContainer>
          <Image
            source={require('~/images/default-profile.png')}
            width="60px"
            height="60px"
          />
          <RightContainer>
            <Title>--</Title>
            <Text color={colors.white}>--</Text>
          </RightContainer>
        </UserContainer>
        <Content>
          <Item marginTop={20}>
            <DrawerItem
              label={translate('drawMenu.home')}
              onPress={() => props.navigation.navigate('Home')}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -9,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/home.svg')}
                  width="22px"
                  height="22px"
                />
              )}
            />
          </Item>

          <Hr />

          <Item>
            <DrawerItem
              label={translate('drawMenu.address')}
              onPress={() => props.navigation.navigate('Address')}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -4,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/map.svg')}
                  width="17px"
                  height="25px"
                />
              )}
            />
          </Item>

          <Item>
            <DrawerItem
              label={translate('drawMenu.myRequests')}
              onPress={() => props.navigation.navigate('Orders')}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -17,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/truck.svg')}
                  width="30px"
                  height="20px"
                />
              )}
            />
          </Item>

          <Item>
            <DrawerItem
              label={translate('drawMenu.cart')}
              onPress={() => props.navigation.navigate('Cart')}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -10,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/cart-2.svg')}
                  width="23px"
                  height="20px"
                />
              )}
            />
          </Item>

          <Hr />

          <Item>
            <DrawerItem
              label={translate('lang.change')}
              onPress={() => openModal()}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -17,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/language.svg')}
                  width="30px"
                  height="28px"
                />
              )}
            />
          </Item>

          <Item>
            <DrawerItem
              label={translate('drawMenu.about')}
              onPress={() => props.navigation.navigate('About')}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -17,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/logo-2.svg')}
                  width="30px"
                  height="28px"
                />
              )}
            />
          </Item>

          <Item>
            <DrawerItem
              label={translate('drawMenu.logout')}
              onPress={() => redirect()}
              style={{ marginLeft: 20 }}
              labelStyle={{
                marginLeft: -17,
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 16,
              }}
              icon={() => (
                <SvgUri
                  source={require('~/images/logout.svg')}
                  width="28px"
                  height="26px"
                />
              )}
            />
          </Item>
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
            >
              {translate('lang.modalChange')}
            </Title>

            <ModalContent>
              <SelectLanguageContainer
                onPress={() => [setLanguageToI18n('pt_BR'), openModal()]}
                padding={10}
                marginVertical={10}
              >
                <Title color={colors.darker} marginLeft={20}>
                  {translate('lang.pt')}
                </Title>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color={colors.darker}
                />
              </SelectLanguageContainer>

              <SelectLanguageContainer
                onPress={() => [setLanguageToI18n('en_US'), openModal()]}
                padding={10}
                marginVertical={10}
              >
                <Title color={colors.darker} marginLeft={20}>
                  {translate('lang.en')}
                </Title>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color={colors.darker}
                />
              </SelectLanguageContainer>

              <SelectLanguageContainer
                onPress={() => [setLanguageToI18n('es_US'), openModal()]}
                padding={10}
                marginVertical={10}
              >
                <Title color={colors.darker} marginLeft={20}>
                  {translate('lang.es')}
                </Title>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color={colors.darker}
                />
              </SelectLanguageContainer>
            </ModalContent>
          </ModalContainer>
        </ModalBox>
      )}
    </>
  );
}
