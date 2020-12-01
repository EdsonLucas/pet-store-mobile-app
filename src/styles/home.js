import styled from 'styled-components/native';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Modal from 'react-native-modalbox';
import { colors, metrics } from './global';

export const Container = styled.SafeAreaView`
  background-color: ${colors.yellow};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${Platform.OS === 'ios' && Device.modelId > 'iPhone10'
      ? 0
      : metrics.basePadding - 10}px
    ${metrics.basePadding}px;
`;

export const CartButton = styled.TouchableOpacity``;

export const DrawerToggleButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-around;

  background-color: ${colors.transparent};
  padding: 0px;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Cat = styled.Image`
  width: 183px;
  height: 200px;

  position: absolute;
  right: 10px;
  top: ${metrics.heightPercentageToDP(14)}px;
  z-index: 99;
`;

export const WelcomeContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 10px;
  padding-top: 50px;
  height: 180px;
  padding: 0px ${metrics.basePadding}px;
`;

export const Content = styled.ScrollView`
  height: 100%;
  padding: 50px 40px;
  margin-top: -10px;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  background: ${colors.white};
  color: ${colors.darker};
`;

export const SelectPetButton = styled.TouchableOpacity`
  background-color: ${colors.lightGray};
  padding: 20px;
  border-radius: 10px;
`;

export const SelectPet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  justify-content: space-between;

  width: 60%;
  margin-left: 10px;
`;

export const ProductButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: ${colors.blue};
  padding: 10px;
  border-radius: 20px;
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

export const BackButton = styled.TouchableOpacity``;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${(props) => props.paddingVertical || 10}px ${metrics.basePadding}px;
`;

export const SelectPetContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: ${(props) => props.padding || 0}px;
  margin: ${(props) => props.marginVertical || 0}px 0px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
