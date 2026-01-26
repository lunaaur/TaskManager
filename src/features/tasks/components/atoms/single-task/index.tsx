import { DateBlock, TaskBlock, TaskContainer, TaskInfoBlock } from './styled';
import { NotCompletedStatus, Text, Zord } from '@atoms';
import { useState } from 'react';
import { TextSizeEnum, TextTypeEnum } from 'src/shared/ui/atoms/text';
import { clrGreen2 } from '@variables';
import { CalendarIcon } from '@icons';

type SingleTaskProps = {
  taskName: string;
  handlePress: () => Promise<void>;
  isCompleted: boolean;
  creationDate: string | null;
};

export const SingleTask = ({
  taskName,
  handlePress,
  isCompleted,
  creationDate,
}: SingleTaskProps) => {
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
        {!isCompleted && (
          <NotCompletedStatus
            handlePress={handleStatusPress}
            isStatusPressed={isStatusPressed}
          />
        )}
        <TaskInfoBlock>
          <Zord marginZord={[0, 0, 0, 20]}>
            <Text text={taskName} />
          </Zord>
          {creationDate !== null && (
            <Zord marginZord={[0, 0, 0, 20]}>
              <DateBlock>
                <CalendarIcon color={clrGreen2} />
                <Zord marginZord={[0, 0, 0, 5]}>
                  <Text
                    text={creationDate}
                    size={TextSizeEnum.SMALL}
                    color={clrGreen2}
                    type={TextTypeEnum.COLOURED}
                  />
                </Zord>
              </DateBlock>
            </Zord>
          )}
        </TaskInfoBlock>
      </TaskBlock>
    </TaskContainer>
  );
};
