import styled from 'styled-components/native';
import { colors, metrics } from './global';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: #ffb901;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: ${metrics.basePadding + 30}px;

  margin-bottom: -${metrics.heightPercentageToDP(6)}px;
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
