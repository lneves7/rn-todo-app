import { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { TodoListContext } from "../../context";
import { styles } from "./styles";

const MainScreen: React.FC = () => {
  const { todos, completedTodos, addTodo } = useContext(TodoListContext);

  useEffect(() => {
    addTodo("Teste 1", false);
    addTodo("Teste 2", false);
    addTodo("Teste 3", false);
    addTodo("Teste 4", true);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {todos.map(({ id, description, important }) => {
        return (
          <View>
            <Text>Id: {id}</Text>
            <Text>{description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MainScreen;
