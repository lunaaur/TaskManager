import { TextElem } from './styled';

export enum TextSizeEnum {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum TextTypeEnum {
  REGULAR = 'regular',
  BOLD = 'bold',
  LINK = 'link',
  COLOURED = 'coloured',
}

export type TextElementsProps = {
  text: string;
  type?: TextTypeEnum;
  size?: TextSizeEnum;
  color?: string;
};

export const TextElement = ({ text, size, type, color }: TextElementsProps) => {

  return (
    <TextElem type={type} size={size} color={color}>
      {text}
    </TextElem>
  );
};
