import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';
import { Task } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.discription} onPress={() => onToggle(task.id)}>
        <Text style={task.completed ? styles.completed : styles.title}>{task.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.editButton}
      onPress={() => navigation.navigate('EditTask',{taskId:task.id})}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
    </View>
  );
};

