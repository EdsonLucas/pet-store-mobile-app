import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { Image } from 'react-native';
import SvgUri from 'expo-svg-uri';
import {
  Container,
  UserContainer,
  RightContainer,
  Content,
  Item,
  Hr,
} from '~/styles/components/sidebar';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

export default function Sidebar({ ...props }) {
  return (
    <Container>
      <UserContainer>
        <Image
          source={require('~/images/default-profile.png')}
          width="60px"
          height="60px"
        />
        <RightContainer>
          <Title>Ana Júlia</Title>
          <Text color={colors.white}>ana.julia@gmail.com</Text>
        </RightContainer>
      </UserContainer>
      <Content>
        <Item marginTop={20}>
          <DrawerItem
            label="Home"
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
            label="Endereços"
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
            label="Meus Pedidos"
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
            label="Carrinho"
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
            label="Sobre a Pet Store"
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
      </Content>
    </Container>
  );
}
