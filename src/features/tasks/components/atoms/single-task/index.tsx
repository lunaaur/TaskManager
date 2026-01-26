import { ITaskState } from 'src/types/task';
import { TaskBlock, TaskContainer } from './styled';
import { NotCompletedStatus, Text, Zord } from '@atoms';
import { useState } from 'react';

type SingleTaskProps = {
  taskName: string;
  handlePress: () => Promise<void>;
  isCompleted: boolean;
  creationDate: Date;
};

export const SingleTask = ({ taskName, handlePress, isCompleted, creationDate }: SingleTaskProps) => {
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
        {!isCompleted && <NotCompletedStatus handlePress={handleStatusPress} isStatusPressed={isStatusPressed}/>}
        <Zord marginZord={[0, 0, 0, 20]}>
          <Text text={taskName} />
        </Zord>
      </TaskBlock>
    </TaskContainer>
  );
};
