import { LogoutButton } from "../../atoms"
import { UserImage, UserInformation } from "../../molecules"
import { Container, UserBlock, UserInfoBlock } from "./styled"

export const UserInfo = () => {
    return (
        <Container>
            <UserBlock>
                <UserImage />
                <UserInfoBlock>
                    <UserInformation />
                    <LogoutButton />
                </UserInfoBlock>
            </UserBlock>
        </Container>
    )
}