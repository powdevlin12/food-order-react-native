import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Title = styled(Text)`
  color : ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.body};
`
export const Address = styled.Text`
  font-family: ${props => props.theme.fonts.monospace};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.button};
`
export const Rating = styled.View`
  flex-direction: row;
`
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;