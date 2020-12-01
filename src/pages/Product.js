import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import SvgUri from 'expo-svg-uri';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';
import { translate } from '~/locales';
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
import api from '~/services/axios';

const Product = ({ navigation, route }) => {
  const {
    Nome,
    Imagem,
    Tipo,
    Detalhe,
    Especificacao,
    Valor,
    id,
  } = route.params.product;

  const [quantity, setQuantity] = useState(1);
  const [specifications, setSpecifications] = useState(false);
  const [details, setDetails] = useState(false);
  const [productValue, setProductValue] = useState(Valor);
  const [productValueFinal, setProductValueFinal] = useState(productValue);

  const handleBuy = () => {
    api
      .post('compras/1/carrinho', {
        ProdutoId: id,
        Quantidade: quantity,
      })
      .then(() => navigation.navigate('Dashboard', { screen: 'Cart' }));
  };

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
          {Nome}
        </Title>

        <ContainerImage>
          <Image source={{ uri: Imagem }} style={{ width: 130, height: 160 }} />
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
            <Title color={colors.darker}>
              {translate('pageProductDetails.dropdownEspecification')}
            </Title>

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
              {Especificacao}
            </Text>
          )}

          <Collapse onPress={() => setDetails(!details)}>
            <Title color={colors.darker}>
              {translate('pageProductDetails.dropdownDetails')}
            </Title>

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
              {Detalhe}
            </Text>
          )}
        </DescriptionContainer>
      </Content>

      <ButtonContainer>
        <Button onPress={() => handleBuy()}>
          <SvgUri source={require('~/images/shopping-cart.svg')} />
          <Title marginLeft={20}>
            {translate('pageProductDetails.btnBuy')}
          </Title>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Product;
