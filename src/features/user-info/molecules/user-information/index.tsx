import { useAppSelector } from "src/store"
import { Container, UserNameText } from "./styled"

export const UserInformation = () => {
    const { name } = useAppSelector((store) => store.user)
    return (
        <Container>
        <UserNameText>{name}</UserNameText>
        </Container>
    )
}