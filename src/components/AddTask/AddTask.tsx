import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Touchable, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask} >
        <Text style={styles.addText}>Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
};
