import styled from 'styled-components/native';
import Modal from 'react-native-modalbox';
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

export const StepButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
`;

export const StepButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  background-color: ${(props) => props.backgrounColor || colors.transparent};
  border: 2px solid ${(props) => props.backgrounColor || colors.gray};
`;

export const Hr = styled.View`
  align-self: center;
  width: 15%;
  margin: 4% 0;
  border-bottom-width: 1.5px;
  border-bottom-color: ${colors.gray};
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
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: ${(props) => props.alignItems || 'flex-start'};

  width: 100%;
  padding-bottom: 30px;
  background: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width || 100}%;
  background: ${(props) => props.backgrounColor || colors.blue};
  padding: 10px;
  margin: 5px 0px;
  border-radius: 20px;
  text-align: center;
`;

export const ModalBox = styled(Modal)`
  height: ${(props) => props.height || 300}px;
  background-color: ${colors.transparent};
`;

export const ModalContainer = styled.ScrollView`
  background-color: ${colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 3;
`;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${(props) => props.paddingVertical || 10}px ${metrics.basePadding}px;
`;

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: ${(props) => props.padding || 0}px;
  margin: ${(props) => props.marginVertical || 0}px 0px;
`;
