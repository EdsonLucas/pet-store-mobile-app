import styled from 'styled-components/native';
import Modal from 'react-native-modalbox';
import { colors, metrics } from '~/styles/global';

export const ModalBox = styled(Modal)`
  height: ${(props) => props.height || 300}px;
  background-color: ${colors.transparent};
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 3;
`;

export const ModalContent = styled.View`
  flex: 0.4;

  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: ${metrics.basePadding + 30}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background: ${(props) => props.backgroundColor || colors.blue};
  padding: 10px;
  margin: 5px 0px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
`;
