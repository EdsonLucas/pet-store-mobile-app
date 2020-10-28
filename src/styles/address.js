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

export const CardList = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 20px;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;

  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px ${colors.lightPlate};
  background-color: ${colors.white};
  elevation: 2;
`;

export const HouseContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 27%;
  height: 70px;
  background: ${(props) => props.backgroundColor || '#a7a7a7'};
  border-radius: 15px;
`;

export const RightContainer = styled.View`
  flex-direction: column;
  justify-content: center;

  width: 60%;
  margin-left: 15px;
`;

export const SelectedContainer = styled.View`
  align-items: center;
  justify-content: center;
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
