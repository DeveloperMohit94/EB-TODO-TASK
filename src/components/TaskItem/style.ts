import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems:'center'
    },
    title: {
      fontSize: 18,
    },
    completed: {
      fontSize: 18,
      textDecorationLine: 'line-through',
      color:'green'
    },
    delete: {
      color: 'red'
    },
    discription:{
      flex:0.7,
      marginRight:5
    },
    deleteButton:{
      flex:0.15
    },
    edit:{
    },
    editButton:{
      flex:0.15
    }
  });