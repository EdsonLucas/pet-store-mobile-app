import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import SvgUri from 'expo-svg-uri';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

import {
  Container,
  Header,
  BackButton,
  Content,
  ContainerImage,
  ButtonContainer,
  ProductButtons,
  ProductPrice,
  QuantityButtonContainer,
  Minus,
  Plus,
  DescriptionContainer,
  Collapse,
  Button,
} from '~/styles/product';

const Product = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [specifications, setSpecifications] = useState(false);
  const [details, setDetails] = useState(false);
  const [productValue, setProductValue] = useState(15.9);
  const [productValueFinal, setProductValueFinal] = useState(productValue);

  const newValue = () => {
    setProductValueFinal(productValue * quantity);
  };

  const add = () => {
    setQuantity(quantity + 1);
  };

  const minus = () => {
    const value = quantity > 1 ? quantity - 1 : quantity;

    setQuantity(value);
  };

  useEffect(() => {
    newValue();
  }, [quantity]);

  return (
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
        <Title fontSize="25px" color={colors.darker}>
          Ração para Cães Adulto Carne e Vegetais Pedigree
        </Title>

        <ContainerImage>
          <Image
            source={require('../images/racao.png')}
            width="177px"
            height="263px"
          />
        </ContainerImage>

        <ProductButtons>
          <ProductPrice>
            <Text fontSize="18px" color={colors.white}>
              R$ {productValueFinal}
            </Text>
          </ProductPrice>
          <QuantityButtonContainer>
            <Minus onPress={() => minus()}>
              <Text fontSize="18px" color={colors.blue}>
                -
              </Text>
            </Minus>
            <Text>{quantity}</Text>
            <Plus onPress={() => add()}>
              <Text fontSize="18px" color={colors.blue}>
                +
              </Text>
            </Plus>
          </QuantityButtonContainer>
        </ProductButtons>

        <DescriptionContainer>
          <Collapse onPress={() => setSpecifications(!specifications)}>
            <Title color={colors.darker}>Especificações</Title>

            <MaterialIcons
              name={
                specifications ? `keyboard-arrow-up` : `keyboard-arrow-down`
              }
              size={40}
              color={colors.darker}
            />
          </Collapse>

          {specifications && (
            <Text marginLeft={20} marginBottom={30}>
              This is the collapsible content. It can be any element or React
              component you like.
            </Text>
          )}

          <Collapse onPress={() => setDetails(!details)}>
            <Title color={colors.darker}>Detalhes</Title>

            <MaterialIcons
              name={
                specifications ? `keyboard-arrow-up` : `keyboard-arrow-down`
              }
              size={40}
              color={colors.darker}
            />
          </Collapse>

          {details && (
            <Text marginLeft={20} marginBottom={30}>
              This is the collapsible content. It can be any element or React
              component you like.
            </Text>
          )}
        </DescriptionContainer>
      </Content>

      <ButtonContainer>
        <Button
          onPress={() => navigation.navigate('Dashboard', { screen: 'Cart' })}
        >
          <SvgUri source={require('~/images/shopping-cart.svg')} />
          <Title marginLeft={20}> Comprar agora </Title>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Product;
