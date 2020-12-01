import styled from 'styled-components/native';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Modal from 'react-native-modalbox';
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

export const ModalBox = styled(Modal)`
  height: ${(props) => props.height || 350}px;
  background-color: ${colors.transparent};
`;

export const ModalContainer = styled.ScrollView`
  background-color: ${colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 3;
`;

export const BackButton = styled.TouchableOpacity``;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${(props) => props.paddingVertical || 10}px ${metrics.basePadding}px;
`;

export const SelectLanguageContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: ${(props) => props.padding || 0}px;
  margin: ${(props) => props.marginVertical || 0}px 0px;
`;
