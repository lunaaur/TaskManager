import styled from 'styled-components/native';
import { clrGreen, SizeEnum } from 'src/shared/variables';

type ButtonTextProps = {
  textSize: SizeEnum;
};

type ButtonProps = {
  size: SizeEnum;
  buttonColor: string;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${(props: ButtonProps) => {
    switch (props.size) {
      case 'small':
        return '140px';
      case 'medium':
        return '180px';
      case 'large':
        return '200px';
      default:
        return '140px';
    }
  }};
  height: 40px;
  background-color: ${(props: ButtonProps) => props.buttonColor ? props.buttonColor : clrGreen};
  border-radius: 25px;
`;

export const ButtonContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  text-transform: ${(props: ButtonTextProps) => {
    switch (props.textSize) {
      case 'large':
        return 'uppercase';
      default:
        return 'none';
    }
  }};
  font-size: ${(props: ButtonTextProps) => {
    switch (props.textSize) {
      case 'small':
        return '16px';
      case 'medium':
        return '17px';
      case 'large':
        return '16px';
      default:
        return '16px';
    }
  }};
  font-weight: ${(props: ButtonTextProps) => {
    switch (props.textSize) {
      case 'small':
        return 400;
      case 'medium':
        return 400;
      case 'large':
        return 500;
      default:
        return 400;
    }
  }};
  letter-spacing: 1.2px;
`;
