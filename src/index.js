import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useFonts, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { colors } from './styles/global';
import Routes from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.yellow} />
      <Routes />
    </NavigationContainer>
  );
}
