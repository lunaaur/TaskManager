import { ButtonText, ButtonTouchable } from './styled';
import { useNavigation } from '@react-navigation/native';
import { useLogoutUserMutation } from 'src/store/api/baseApi';

export const LogoutButton = () => {
  const { reset } = useNavigation();
  const [logoutUser] = useLogoutUserMutation();
  
  const handleButtonPress = async () => {
    const data = await logoutUser();
    if (data) {
      reset({ index: 0, routes: [{ name: 'login' as never }] });
    }
  };
  return (
    <ButtonTouchable onPress={handleButtonPress}>
      <ButtonText>Выйти из аккаунта</ButtonText>
    </ButtonTouchable>
  );
};
