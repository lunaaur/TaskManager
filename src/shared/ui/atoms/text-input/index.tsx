import { TextInput, TextInputProps } from 'react-native';
import {
  ErrorText,
  FieldBlock,
  IconContainer,
  placeholderColor,
  placeholderColorActive,
} from './styled';
import React, { useState } from 'react';
import { Zord } from '../zord';

export enum InputSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  text: string;
  icon?: Element;
  onIconPress?: () => void;
  handleBlur?: () => void;
  errorText?: string | null;
  size?: InputSize;
  color?: string;
};

export const TextInputElement = ({
  text,
  size,
  color,
  onIconPress,
  icon,
  handleBlur,
  errorText,
  autoCorrect = true,
  autoComplete = 'off',
  autoCapitalize = 'sentences',
  ...props
}: Props & TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onBlur = () => {
    setIsFocused(!isFocused);
    handleBlur?.();
  };

  return (
    <>
      <FieldBlock
        size={size}
        color={isFocused ? placeholderColorActive : color}
      >
        <TextInput
          value={text}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => onBlur()}
          placeholderTextColor={
            isFocused ? placeholderColorActive : placeholderColor
          }
          {...props}
        />

        {icon ? (
          <IconContainer onPress={onIconPress}>{icon}</IconContainer>
        ) : null}
      </FieldBlock>
      {errorText && (
        <Zord marginZord={[10, 0, 0, 0]}>
          <ErrorText>{errorText}</ErrorText>
        </Zord>
      )}
    </>
  );
};
