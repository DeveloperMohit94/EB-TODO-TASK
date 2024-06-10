import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types';
import { addTask, deleteTask, fetchTasks, toggleTask } from '../../redux/tasksSlice';
import { AddTask, TaskList } from '../../components';

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <AddTask />
      <TaskList tasks={tasks} onToggle={(id) => dispatch(toggleTask(id))} onDelete={(id) => dispatch(deleteTask(id))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});
