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

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;

  margin: 30px 0;
`;

export const ProductButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ProductPrice = styled.View`
  align-items: center;
  justify-content: center;

  width: 45%;
  padding: 10px;
  background: ${colors.blue};
  border-radius: 20px;
`;

export const QuantityButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 45%;
  padding: 10px;
  border: 1px solid #707070;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const Minus = styled.TouchableOpacity``;

export const Plus = styled.TouchableOpacity``;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 0;
`;

export const Collapse = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: ${colors.lightGray};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding-bottom: 30px;
  background: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${colors.blue};
  padding: 10px;
  margin: 20px 40px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
`;
