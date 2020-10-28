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

export const InputContainer = styled.View`
  margin-bottom: ${(props) => props.marginBottom || 40}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  margin-top: 10px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${colors.gray};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding-bottom: 30px;
  background: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background: ${colors.blue};
  padding: 10px;
  margin: 20px 40px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
`;
