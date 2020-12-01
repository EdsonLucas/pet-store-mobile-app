import React from 'react';
import SvgUri from 'expo-svg-uri';
import { translate } from '~/locales';
import {
  Container,
  Header,
  BackButton,
  Content,
  CardProduct,
  ProductImage,
  RightContainer,
  ProductButton,
} from '~/styles/orders';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

const Orders = ({ navigation }) => {
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
        <Title fontSize="35px" color={colors.darker} marginBottom={10}>
          {translate('pageNewRequests.title')}
        </Title>

        <CardProduct style={{ elevation: 3 }}>
          <ProductImage source={require('~/images/racao.png')} />
          <RightContainer>
            <Title color={colors.darker} marginLeft={5} marginBottom={20}>
              Ração para Cães Adulto Carne e Vegetais Pedigree
            </Title>
            <ProductButton onPress={() => navigation.navigate('Product')}>
              <Text fontSize="20px" color={colors.white}>
                R$ 15.90
              </Text>
            </ProductButton>
          </RightContainer>
        </CardProduct>
      </Content>
    </Container>
  );
};

export default Orders;
