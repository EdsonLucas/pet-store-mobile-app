import styled from 'styled-components/native';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { colors, metrics } from './global';

export const Container = styled.View`
  background: #ffb901;
  height: 100%;
`;

export const Header = styled.View`
  padding-top: ${Platform.OS === 'ios' && Device.modelId > 'iPhone10'
    ? 60
    : 40}px;
  padding-left: 40px;

  margin-bottom: 30px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Content = styled.ScrollView`
  padding: 50px 40px;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  background: ${colors.white};
  color: #707070;
`;

export const CardProduct = styled.View`
  flex-direction: row;

  padding: 20px;
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px ${colors.lightPlate};
  background-color: ${colors.white};
`;

export const ProductImage = styled.Image`
  width: 97px;
  height: 137px;
`;

export const RightContainer = styled.View`
  flex-direction: column;

  width: 60%;
  margin-left: 10px;
`;

export const ProductButton = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${colors.blue};
  padding: 10px;
  border-radius: 20px;
`;
