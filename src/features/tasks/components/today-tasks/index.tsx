import { TextSizeEnum, TextTypeEnum } from 'src/shared/ui/atoms/text';

import { Container, ListBlock } from './styled';
import { Zord } from '@atoms';
import { Header } from '@elements';
import { TasksList } from '../elements/tasks-list';

export const TodayTasks = () => {
  return (
    <Container>
      <Zord marginZord={[40, 0, 0, 0]}>
        <Header
          text={'Сегодня'}
          type={TextTypeEnum.BOLD}
          size={TextSizeEnum.LARGE}
        />
        <ListBlock>
        <TasksList />
        </ListBlock>
      </Zord>
    </Container>
  );
};
