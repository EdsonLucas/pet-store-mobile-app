import styled from 'styled-components/native';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { colors, metrics } from '~/styles/global';

export const Container = styled.View`
  background-color: ${colors.yellow};
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 24px;
  padding-top: ${Platform.OS === 'ios' && Device.modelId > 'iPhone10'
    ? 50
    : 30}px;
`;

export const RightContainer = styled.View`
  width: 80%;
`;

export const Content = styled.View`
  background-color: ${colors.white};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  height: 100%;
  margin-top: -10px;
`;

export const Item = styled.View`
  margin-top: ${(props) => props.marginTop || 0}px;
`;

export const Hr = styled.View`
  align-self: center;
  width: 80%;
  margin: 4% 0;
  border-bottom-width: 1.5px;
  border-bottom-color: ${colors.gray};
`;
