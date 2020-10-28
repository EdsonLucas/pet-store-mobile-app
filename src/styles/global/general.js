import styled from 'styled-components';
import colors from './colors';
import metrics from './metrics';

export const Container = styled.SafeAreaView`
  flex: ${(props) => props.flex || 1};

  background-color: ${(props) => props.backgroundColor || colors.white};
`;

export const Header = styled.View`
  padding: ${(props) => props.padding || metrics.basePadding}px;
  background-color: ${(props) => props.backgroundColor || colors.white};
`;

export const Title = styled.Text`
  align-self: ${(props) => props.alignSelf || 'auto'};

  text-align: ${(props) => props.textAlign || 'auto'};
  font-family: 'Nunito_800ExtraBold';
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || 500};
  color: ${(props) => props.color || colors.white};
  letter-spacing: ${(props) => props.letterSpacing || 0}px;
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;

export const Text = styled.Text`
  align-self: ${(props) => props.alignSelf || 'auto'};

  text-align: ${(props) => props.textAlign || 'auto'};
  font-family: 'Nunito_800ExtraBold';
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || colors.darker};
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;
