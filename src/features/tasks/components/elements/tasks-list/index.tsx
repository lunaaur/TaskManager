import { useGetTasksQuery } from 'src/store/api/tasksApi';
import { SingleTask } from '../../atoms/single-task';
import { ITaskState } from 'src/types/task';
import { List } from './styled';
import { LineSeparator } from '@atoms';
import { View } from 'react-native';

export const TasksList = () => {
  const { data } = useGetTasksQuery();

  const handleCompleteTask = async ({ item }: { item: ITaskState }) => {
    try {
      console.log(item, 'item');
      //* some logic with api for single task
      return true;
    } catch (error: any) {
      console.log(error, 'Error handlePress');
    }
  };

  const renderItem = ({ item }: { item: ITaskState }) => {
    return (
      <SingleTask
        taskName={item.name}
        isCompleted={item.completed}
        creationDate={item.created_at}
        handlePress={() => handleCompleteTask({ item })}
      />
    );
  };

  return (
  <List
    keyExtractor={(item: ITaskState) => item.id.toString()}
    data={data?.tasks}
    renderItem={renderItem}
    ItemSeparatorComponent={() => <LineSeparator />}
    />
);
};
