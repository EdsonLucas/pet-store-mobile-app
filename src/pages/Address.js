import React, { useState } from 'react';
import SvgUri from 'expo-svg-uri';
import {
  Container,
  Header,
  BackButton,
  Content,
  CardList,
  Card,
  HouseContainer,
  RightContainer,
  SelectedContainer,
  ButtonContainer,
  Button,
} from '~/styles/address';
import { Title, Text } from '~/styles/global/general';
import { colors, metrics } from '~/styles/global';

const options = [
  {
    index: 1,
    title: 'Rua Vicente Santório Fantini, 80',
    text: 'Campo Grande, Cariacica',
  },
  {
    index: 2,
    title: 'Rua Presidente Lima, 312',
    text: 'Centro, Vila Velha',
  },
];

const Address = ({ navigation }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [checked, setChecked] = useState(1);

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
          Meus{'\n'}Endereços
        </Title>

        <CardList>
          {isEmpty ? (
            <Title color={colors.darker}>
              Você não possui nenhum endereço cadastrado :(
            </Title>
          ) : (
            <>
              {options.map((item) => (
                <Card key={item.index} onPress={() => setChecked(item.index)}>
                  <HouseContainer
                    backgroundColor={checked === item.index && colors.blue}
                  >
                    <SvgUri
                      source={require('~/images/house.svg')}
                      width="38px"
                      height="70px"
                    />
                  </HouseContainer>
                  <RightContainer>
                    <Title fontSize="15px" color={colors.darker}>
                      {item.title}
                    </Title>
                    <Text color={colors.plate}>{item.text}</Text>
                  </RightContainer>
                  {checked === item.index && (
                    <SelectedContainer>
                      <SvgUri
                        source={require('~/images/selected.svg')}
                        width="26px"
                        height="49px"
                      />
                    </SelectedContainer>
                  )}
                </Card>
              ))}
            </>
          )}
        </CardList>
      </Content>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate('NewAddress')}>
          <Title>Adicionar Novo Endereço</Title>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Address;
