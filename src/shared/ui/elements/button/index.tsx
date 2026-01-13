import { TextProps } from "react-native";
import { Button, ButtonContent, ButtonText } from "./styled"
import { SizeEnum } from "src/shared/variables";

type ButtonElementProps = {
    buttonText: string;
    size: SizeEnum;
}

export const ButtonElement = ({
buttonText,
size = SizeEnum.MEDIUM,
...props
}: ButtonElementProps & TextProps) => {
    return (
        <>
        <Button size={size} {...props}>
            <ButtonContent>
            <ButtonText textSize={size}>{buttonText}</ButtonText>
            </ButtonContent>
        </Button>
        </>
    )
}