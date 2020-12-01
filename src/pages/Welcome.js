import React from 'react';
import { Image } from 'react-native';
import { colors, metrics } from '~/styles/global';
import { Title, Text } from '~/styles/global/general';
import { translate } from '~/locales';

import { Container, ButtonContainer, Button } from '~/styles/welcome';

const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Image
        source={require('~/images/logo-main.png')}
        width="136px"
        height="172px"
      />

      <Title
        textAlign="center"
        marginTop={metrics.heightPercentageToDP(5)}
        marginBottom={metrics.heightPercentageToDP(5)}
        marginLeft={60}
        marginRight={60}
      >
        {translate('main.mainDesc')}
      </Title>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate('SignIn')}>
          <Title>{translate('main.btnJaSouC')}</Title>
        </Button>
        <Button backgroundColor={colors.transparent}>
          <Title onPress={() => navigation.navigate('SignUp')}>
            {translate('main.btnSignin')}
          </Title>
        </Button>
      </ButtonContainer>

      <Image
        source={require('~/images/dog-main.png')}
        width="375px"
        height="156px"
      />
    </Container>
  );
};

export default Welcome;
