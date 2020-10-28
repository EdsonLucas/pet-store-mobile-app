import styled from 'styled-components/native';
import { colors, metrics } from './global';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
`;

export const Food = styled.Image`
  position: absolute;
  width: 120px;
  height: 131px;
  left: 0px;
  top: ${metrics.heightPercentageToDP(8)}px;
`;

export const Header = styled.View`
  flex: 0.7;

  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Food2 = styled.Image`
  position: absolute;
  width: 120px;
  height: 161px;
  right: 0;
  top: 0;
`;

export const Content = styled.View`
  flex: 1;

  width: 100%;
  padding: 24px;
`;

export const InputContainer = styled.View`
  margin-bottom: ${(props) => props.marginBottom || 40}px;
`;

export const Input = styled.TextInput`
  align-self: center;

  width: 90%;
  margin-top: 10px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${colors.gray};
`;

export const LastContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0px 20px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width || 100}%;
  background: ${(props) => props.backgroundColor || colors.blue};
  padding: 10px;
  margin: 5px 0px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
`;
