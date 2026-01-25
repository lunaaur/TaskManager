import { TextSizeEnum, TextTypeEnum } from 'src/shared/ui/atoms/text';

import { Container } from './styled';
import { Zord } from '@atoms';
import { Header } from '@elements';

export const TodayTasks = () => {
  return (
    <Container>
      <Zord marginZord={[40, 0, 0, 0]}>
        <Header
          text={'Сегодня'}
          type={TextTypeEnum.BOLD}
          size={TextSizeEnum.LARGE}
        />
      </Zord>
    </Container>
  );
};
