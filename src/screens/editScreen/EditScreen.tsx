import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../../types';
import { editTask } from '../../redux/tasksSlice';
import { styles } from './style';
import { RouteProp } from '@react-navigation/native';

// Define the route parameters type
type RootStackParamList = {
  EditTask: { taskId: number };
};

// Define the props type for the EditTaskScreen component
export interface EditTaskScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'EditTask'>;
  route: RouteProp<RootStackParamList, 'EditTask'>;
}
export const EditTaskScreen: React.FC<EditTaskScreenProps> = ({ route, navigation }) => {
  const { taskId } = route.params;
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) => state.tasks.find(t => t.id === taskId));

  const [title, setTitle] = useState(task?.title || '');

  const handleEditTask = () => {
    if (task) {
      dispatch(editTask({ ...task, title, }));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Edit Task" onPress={handleEditTask} />
    </View>
  );
};

