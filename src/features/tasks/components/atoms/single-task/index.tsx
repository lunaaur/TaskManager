import { DateBlock, TaskBlock, TaskContainer, TaskInfoBlock } from './styled';
import { NotCompletedStatus, Text, Zord } from '@atoms';
import { useMemo, useState } from 'react';
import { TextSizeEnum, TextTypeEnum } from 'src/shared/ui/atoms/text';
import { clrGreen2 } from '@variables';
import { CalendarIcon } from '@icons';
import { FormatEnum, handleDateFormation } from 'src/shared/helpers/formatDate';

type SingleTaskProps = {
  taskName: string;
  handlePress: () => Promise<boolean>;
  isCompleted: boolean;
  creationDate: Date;
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
      await handlePress()
    } catch (error: any) {
      console.log(error, 'Error handleStatusPress');
    } finally {
      setIsStatusPressed(false);
    }
  };

  const formattedDate = useMemo(() => {
    if (!creationDate) return null;
    
    return handleDateFormation({
      date: creationDate,
      dateFormat: FormatEnum.DATEMONTH
    });
  }, [creationDate]); 

  
  return (
    <TaskContainer>
      <TaskBlock>
          <NotCompletedStatus
            isCompleted={isCompleted}
            handlePress={handleStatusPress}
            isStatusPressed={isStatusPressed}
          />
        <TaskInfoBlock>
          <Zord marginZord={[0, 0, 0, 20]}>
            <Text text={taskName} />
          </Zord>
          {formattedDate !== null && (
            <Zord marginZord={[0, 0, 0, 20]}>
              <DateBlock>
                <CalendarIcon color={clrGreen2} />
                <Zord marginZord={[0, 0, 0, 5]}>
                  <Text
                    text={formattedDate!}
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
