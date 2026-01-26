import styled from 'styled-components/native';
import { TextSizeEnum, TextTypeEnum } from '.';
import { clrBlue } from '@variables';

type TextElemProps = {
  type: TextTypeEnum;
  size: TextSizeEnum;
  color: string;
};

export const TextElem = styled.Text<TextElemProps>`
    font-size: ${(props: TextElemProps) => {
        switch (props.size) {
            case 'large': 
            return '25px';
            case 'medium': 
            return '16px';
            case 'small': 
            return '14px';
            default:
            return '16px';
        }
    }};
    font-weight: ${(props: TextElemProps) => {
        switch (props.type) {
            case 'regular': 
            return '400';
            case 'bold': 
            return '700';
            case 'link': 
            return '400';
            default:
            return '400';
        }
    }};
       color: ${(props: TextElemProps) => {
        switch (props.type) {
            case 'link': 
            return clrBlue;
            case 'coloured':
                return props.color
            default:
            return 'black';
        }
    }};
`;
