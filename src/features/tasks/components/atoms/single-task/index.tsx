import { ITaskState } from 'src/types/task';
import { TaskBlock, TaskContainer } from './styled';
import { NotCompletedStatus, Text, Zord } from '@atoms';
import { useState } from 'react';

type SingleTaskProps = {
  task: ITaskState;
  handlePress: () => Promise<void>;
};

export const SingleTask = ({ task, handlePress }: SingleTaskProps) => {
  const [isStatusPressed, setIsStatusPressed] = useState<boolean>(false);

  const handleStatusPress = async () => {
      setIsStatusPressed(true);
      try {
        //* handlePress()
        await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error: any) {
      console.log(error, 'Error handleStatusPress');
    } finally {
      setIsStatusPressed(false);
    }
  };
  return (
    <TaskContainer>
      <TaskBlock>
        {!task.completed && <NotCompletedStatus handlePress={handleStatusPress} isStatusPressed={isStatusPressed}/>}
        <Zord marginZord={[0, 0, 0, 20]}>
          <Text text={task.name} />
        </Zord>
      </TaskBlock>
    </TaskContainer>
  );
};
