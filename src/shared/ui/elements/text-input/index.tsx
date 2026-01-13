import { TextInput, TextInputProps } from 'react-native';
import { FieldBlock, IconContainer, placeholderColor, placeholderColorActive } from './styled';
import React, { useState } from 'react';

export enum InputSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  text: string;
  icon?: Element;
  onIconPress?: () => void;
  size?: InputSize;
  color?: string;
};

export const TextInputElement = ({
  text,
  size,
  color,
  onIconPress,
  icon,
  autoCorrect = true,
  autoComplete = 'off',
  autoCapitalize = 'sentences',
  ...props
}: Props & TextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

  return (
    <FieldBlock size={size} color={isFocused ? placeholderColorActive : color}>
      <TextInput
        value={text}
        autoCorrect={autoCorrect}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() =>  setIsFocused(!isFocused)}
         placeholderTextColor={
          isFocused ? placeholderColorActive : placeholderColor
        }
        {...props}
      />
      {icon ? (
        <IconContainer onPress={onIconPress}>
            {icon}
        </IconContainer>
      ) : null}
    </FieldBlock>
  );
};
