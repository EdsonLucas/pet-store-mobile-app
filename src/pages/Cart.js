import React, { useState, useEffect } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import SvgUri from 'expo-svg-uri';
import { Image } from 'react-native';
import {
  Container,
  Header,
  BackButton,
  Content,
  Card,
  HouseContainer,
  RightContainer,
  SelectedContainer,
  CardProduct,
  Column,
  Row,
  DescriptionContainer,
  RemoveProductButton,
  ProductButtons,
  ProductPrice,
  QuantityButtonContainer,
  Minus,
  Plus,
  SelectPaymentButton,
  SelectPayment,
  SelectContainer,
  CardResume,
  ItemResume,
  ButtonContainer,
  Button,
  ModalBox,
  ModalContainer,
  ModalContent,
} from '~/styles/cart';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

import ConfirmMessage from '~/components/ConfirmMessage';

const product = [
  {
    index: 1,
    title: 'Ração para Cães Adulto Carne e Vegetais Pedigree',
    value: 15.9,
  },
];

const payment = [
  {
    index: 0,
    value: 'dinheiro',
    title: 'Dinheiro',
  },
  {
    index: 1,
    value: 'picpay',
    title: 'PicPay',
  },
];

const Cart = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
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

  const deleteProduct = (index) => {
    const removeIndex = product.map((item) => item.key).indexOf(index);

    product.splice(removeIndex, 1);

    product.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
  };

  const openModal = () => {
    setIsVisible(!isVisible);
  };

  const openModalMessage = () => {
    setIsVisible2(!isVisible2);
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
          <Title fontSize="35px" color={colors.darker} marginBottom={30}>
            Carrinho
          </Title>

          <Text fontSize="18px" marginBottom={10}>
            Entregar em
          </Text>

          <Card disabled>
            <HouseContainer backgroundColor={colors.blue}>
              <SvgUri
                source={require('~/images/house.svg')}
                width="38px"
                height="70px"
              />
            </HouseContainer>
            <RightContainer>
              <Text>Rua Vicente Santório Fantini, 80</Text>
              <Text color={colors.plate}>Campo Grande, Cariacica</Text>
            </RightContainer>
            <SelectedContainer>
              <SvgUri
                source={require('~/images/selected.svg')}
                width="26px"
                height="49px"
              />
            </SelectedContainer>
          </Card>

          <Text fontSize="18px">Produtos</Text>
          {isEmpty ? (
            <Text marginTop={15} fontSize="18px" color={colors.plate}>
              O carrinho está vazio :(
            </Text>
          ) : (
            <>
              {product.map((item) => (
                <CardProduct key={item.index}>
                  <Image source={require('~/images/racao.png')} />

                  <Column>
                    <Row>
                      <DescriptionContainer>
                        <Text style={{ width: '40%' }}>{item.title}</Text>
                      </DescriptionContainer>
                      <RemoveProductButton
                        onPress={() => deleteProduct(item.key)}
                      >
                        <SvgUri
                          source={require('~/images/delete.svg')}
                          width="18px"
                          height="22px"
                        />
                      </RemoveProductButton>
                    </Row>
                    <ProductButtons>
                      <ProductPrice>
                        <Text>R${productValueFinal}</Text>
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
                  </Column>
                </CardProduct>
              ))}
            </>
          )}

          <Text fontSize="18px" marginTop={20} marginBottom={10}>
            Forma de Pagamento
          </Text>
          <SelectPaymentButton onPress={() => openModal()}>
            {selectedProduct.length === 0 ? (
              <SelectPayment>
                <Text fontSize="18px">Forma de pagamento</Text>

                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={40}
                  color={colors.darker}
                />
              </SelectPayment>
            ) : (
              <SelectContainer disabled>
                <Title color={colors.darker} marginLeft={20}>
                  {selectedProduct.title}
                </Title>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color={colors.darker}
                />
              </SelectContainer>
            )}
          </SelectPaymentButton>

          <Text fontSize="18px" marginTop={20}>
            Resumo
          </Text>
          <CardResume>
            <ItemResume>
              <Title color={colors.darker}>Total</Title>
              <Text color={colors.plate}>
                R${isEmpty ? `00.0` : productValueFinal}
              </Text>
            </ItemResume>
            <ItemResume>
              <Title color={colors.darker}>Frete</Title>
              <Text color={colors.plate}>Gratuito</Text>
            </ItemResume>
            <ItemResume>
              <Title color={colors.darker}>Valor Final</Title>
              <Text fontSize="25px" color={colors.blue}>
                R${isEmpty ? `00.0` : productValueFinal}
              </Text>
            </ItemResume>
          </CardResume>
        </Content>

        <ButtonContainer>
          <Button onPress={() => openModalMessage()}>
            <Title>Finalizar Compra</Title>
          </Button>
        </ButtonContainer>
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
              marginBottom={20}
            >
              Selecione a {'\n'}forma de pagamento
            </Title>

            <ModalContent>
              {payment.map((item) => (
                <SelectContainer
                  key={item.index}
                  onPress={() => [setSelectedProduct(item), openModal()]}
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
          title="Obrigado!"
          message="O seu pedido #76281 foi realizado. Por favor, verifique o status do pedido."
          existButtons
          onSubmit={() => navigation.navigate('Home')}
          onSubmitTitle="Continuar comprando"
        />
      )}
    </>
  );
};

export default Cart;
