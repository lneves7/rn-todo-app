/* eslint-disable react/style-prop-object */
import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { TodoListContext } from '../../context';
import { styles } from './styles';
import { AddTodoForm } from '../../components';

const MainScreen: React.FC = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddTodoForm />
      {todos.map(({ id, description }) => (
        <View key={id}>
          <Text>Id: {id}</Text>
          <Text>{description}</Text>
        </View>
      ))}
    </View>
  );
};

export default MainScreen;
