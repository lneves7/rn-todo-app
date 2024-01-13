/* eslint-disable react/style-prop-object */
import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import { TodoListContext } from '../../context';
import { styles } from './styles';
import { AddTodoForm } from '../../components';

const MainScreen: React.FC = () => {
  const { todos, completedTodos, removeTodo, completeTodo } = useContext(TodoListContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddTodoForm />
      {todos.map(({ id, description }) => (
        <View key={id}>
          <Text>Id: {id}</Text>
          <Text>{description}</Text>
          <Button title="remover" color="#f00" onPress={() => removeTodo(id)} />
          <Button title="completar" color="green" onPress={() => completeTodo(id)} />
        </View>
      ))}
      {completedTodos.map(({ id, description, completedAt }) => (
        <View key={id}>
          <Text>Id: {id}</Text>
          <Text>{description}</Text>
          {completedAt !== null && <Text>{completedAt}</Text>}
        </View>
      ))}
    </View>
  );
};

export default MainScreen;
