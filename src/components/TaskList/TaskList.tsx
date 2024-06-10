import React from 'react';
import { FlatList } from 'react-native';
import { TaskItem } from '../../components';
import { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};
