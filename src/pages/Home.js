import React, { useState } from 'react';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import SvgUri from 'expo-svg-uri';
import {
  Container,
  Header,
  CartButton,
  DrawerToggleButton,
  ContainerLogo,
  Cat,
  WelcomeContainer,
  Content,
  SelectPetButton,
  SelectPet,
  CardProduct,
  ProductImage,
  RightContainer,
  ProductButton,
  ModalBox,
  ModalContainer,
  ModalContent,
  SelectPetContainer,
  IconContainer,
} from '~/styles/home';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

const pets = [
  {
    index: 0,
    value: 'dog',
    title: 'Cachorro',
    icon: (
      <SvgUri
        width="30px"
        height="38px"
        source={require('~/images/select-dog.svg')}
      />
    ),
  },
  {
    index: 1,
    value: 'cat',
    title: 'Gato',
    icon: (
      <SvgUri
        width="35px"
        height="38px"
        source={require('~/images/select-cat.svg')}
      />
    ),
  },
];

export default function Home({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const openModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container>
        <Title
          fontSize="40px"
          fontWeight="800"
          style={{
            position: 'absolute',
            left: 30,
            top: metrics.screenHeight / 2.8,
            zIndex: 999,
          }}
        >
          Olá,{'\n'}Bem-vindo
        </Title>
        <Cat source={require('~/images/cat.png')} />

        <Header>
          <DrawerToggleButton onPress={() => navigation.openDrawer()}>
            <SimpleLineIcons name="menu" color={colors.white} size={30} />
          </DrawerToggleButton>

          <ContainerLogo>
            <SvgUri
              width="62px"
              height="56px"
              source={require('~/images/logo.svg')}
            />
          </ContainerLogo>

          <CartButton onPress={() => navigation.navigate('Cart')}>
            <SvgUri
              width="34px"
              height="30px"
              source={require('~/images/shopping-cart.svg')}
            />
          </CartButton>
        </Header>

        <WelcomeContainer />

        <Content showsVerticalScrollIndicator={false}>
          <Title
            color={colors.darker}
            fontSize="20px"
            fontWeight="700"
            marginBottom={10}
          >
            Rações para
          </Title>

          <SelectPetButton onPress={() => openModal()}>
            {selectedProduct.length === 0 ? (
              <SelectPet>
                <Text fontSize="18px">Escolha o pet</Text>

                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={40}
                  color={colors.darker}
                />
              </SelectPet>
            ) : (
              <SelectPetContainer disabled>
                <IconContainer>
                  {selectedProduct.icon}

                  <Title color={colors.darker} marginLeft={20}>
                    {selectedProduct.title}
                  </Title>
                </IconContainer>

                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={40}
                  color={colors.darker}
                />
              </SelectPetContainer>
            )}
          </SelectPetButton>

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
              Selecione a ração para o {'\n'} pet desejado
            </Title>

            <ModalContent>
              {pets.map((item) => (
                <SelectPetContainer
                  key={item.index}
                  onPress={() => [setSelectedProduct(item), openModal()]}
                  padding={10}
                  marginVertical={10}
                >
                  <IconContainer>
                    {item.icon}

                    <Title color={colors.darker} marginLeft={20}>
                      {item.title}
                    </Title>
                  </IconContainer>

                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={40}
                    color={colors.darker}
                  />
                </SelectPetContainer>
              ))}
            </ModalContent>
          </ModalContainer>
        </ModalBox>
      )}
    </>
  );
}
