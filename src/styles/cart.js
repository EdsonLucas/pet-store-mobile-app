import styled from 'styled-components/native';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Modal from 'react-native-modalbox';
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

export const CardProduct = styled.View`
  flex-direction: row;

  padding: 20px;
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px ${colors.lightPlate};
  background-color: ${colors.white};
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;

  width: 50%;
  margin-left: 15px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const RemoveProductButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

export const ProductButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPrice = styled.View`
  align-items: center;
  justify-content: center;

  width: 23%;
  padding: 8px;
`;

export const QuantityButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 30%;
  padding: 10px;
  border: 1px solid #707070;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const Minus = styled.TouchableOpacity``;

export const Plus = styled.TouchableOpacity``;

export const SelectPaymentButton = styled.TouchableOpacity`
  background-color: ${colors.lightGray};
  padding: 20px;
  border-radius: 10px;
`;

export const SelectPayment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: ${(props) => props.padding || 0}px;
  margin: ${(props) => props.marginVertical || 0}px 0px;
`;

export const CardResume = styled.View`
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  padding: 20px;
  margin-bottom: 70px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px ${colors.lightPlate};
  background-color: ${colors.white};
  elevation: 2;
`;

export const ItemResume = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
