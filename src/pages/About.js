import React from 'react';
import SvgUri from 'expo-svg-uri';
import { Image } from 'react-native';
import { Container, Header, BackButton, Content } from '~/styles/about';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';

const About = ({ navigation }) => {
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

      <Content>
        <Image
          source={require('~/images/logo-main.png')}
          width="136px"
          height="172px"
        />
        <Title
          textAlign="center"
          marginTop={20}
          marginBottom={20}
          marginLeft={60}
          marginRight={60}
        >
          O seu aplicativo de compra de ração online.
        </Title>
        <Text color={colors.white}>Versão 1.0.0</Text>
      </Content>
    </Container>
  );
};

export default About;
