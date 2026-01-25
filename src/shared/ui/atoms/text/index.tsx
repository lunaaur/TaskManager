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
}

export type TextElementsProps = {
  text: string;
  type?: TextTypeEnum;
  size?: TextSizeEnum;
};

export const TextElement = ({ text, size, type }: TextElementsProps) => {

  return (
    <TextElem type={type} size={size}>
      {text}
    </TextElem>
  );
};
