import styled from 'styled-components/native';

type ZordValue = number | number[];

const getSizeValue = (size: number) => `${size}${size !== 0 ? 'px' : ''}`;

const getZordCssValue = (size: ZordValue) =>
  Array.isArray(size) ? size.map(getSizeValue).join(' ') : getSizeValue(size);

export const Zord = styled.View<{ marginZord: ZordValue }>`
  margin: ${({ marginZord }: { marginZord: ZordValue }) => getZordCssValue(marginZord)};
`;