import { useCallback } from 'react';
import { useCompleteTaskMutation, useGetTasksQuery } from 'src/store/api/tasksApi';
import { SingleTask } from '../../atoms/single-task';
import { ITaskState } from 'src/types/task';
import { List } from './styled';
import { LineSeparator } from '@atoms';

export const TasksList = () => {
  const { data } = useGetTasksQuery();
  
  const [ completeTask ] = useCompleteTaskMutation();

  const handleCompleteTask = useCallback(async ({ id, completed }: { 
    id: number, 
    completed: boolean 
  }): Promise<boolean> => {
    try {
      await completeTask({id: id, completed: !completed}).unwrap();
      return true;
    } catch (error: any) {
      console.log(error, 'Error handlePress');
      return false;
    }
  }, [completeTask]);

  const renderItem = useCallback(({ item }: { item: ITaskState }) => {

    return (
      <SingleTask
        taskName={item.name}
        isCompleted={item.completed}
        creationDate={item.created_at}
        handlePress={() => handleCompleteTask({ 
          id: item.id, 
          completed: item.completed 
        })}
      />
    );
  }, [handleCompleteTask]);

  return (
    <List
      keyExtractor={(item: ITaskState) => item.id.toString()}
      data={data?.tasks}
      renderItem={renderItem}
      ItemSeparatorComponent={ () => <LineSeparator />}
    />
  );
};