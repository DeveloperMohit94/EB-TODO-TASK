import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import { styles } from './style';

export const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTask({ title }));
      setTitle('');
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
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};
