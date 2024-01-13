import { useContext, useState } from 'react';
import { View, TextInput, Switch } from 'react-native';
import { TodoListContext } from '../../context';
import { styles } from './styles';

const AddTodoForm: React.FC = () => {
  const { addTodo } = useContext(TodoListContext);
  const [todoDescription, setTodoDescription] = useState<string>('');
  const [toggleImportant, setToggleImportant] = useState<boolean>(false);

  const handleFormSubmit = () => {
    if (todoDescription.replace(/\s+/g, '').length === 0) return;
    addTodo(todoDescription, toggleImportant);
    setTodoDescription('');
    setToggleImportant(false);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={todoDescription}
        onChangeText={(v) => setTodoDescription(v)}
        onSubmitEditing={handleFormSubmit}
        autoFocus
      />
      <Switch value={toggleImportant} onValueChange={(v) => setToggleImportant(v)} />
    </View>
  );
};

export default AddTodoForm;
