import { TextProps } from "react-native";
import { Button, ButtonContent, ButtonText } from "./styled"
import { SizeEnum } from "src/shared/variables";

type ButtonElementProps = {
    buttonText: string;
    size: SizeEnum;
    buttonColor?: string;
}

export const ButtonElement = ({
buttonText,
size = SizeEnum.MEDIUM,
buttonColor,
...props
}: ButtonElementProps & TextProps) => {
    return (
        <>
        <Button size={size} buttonColor={buttonColor} {...props}>
            <ButtonContent>
            <ButtonText textSize={size}>{buttonText}</ButtonText>
            </ButtonContent>
        </Button>
        </>
    )
}