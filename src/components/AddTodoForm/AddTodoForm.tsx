import FA from '@expo/vector-icons/FontAwesome';
import { useContext, useState } from 'react';
import { View, TextInput, Switch, Text, Pressable } from 'react-native';
import { TodoListContext } from '../../context';
import { styles } from './styles';
import { COLORS } from '../../constants';

const AddTodoForm: React.FC = () => {
  const { addTodo } = useContext(TodoListContext);
  const [inputActive, setInputActive] = useState<boolean>(false);
  const [todoDescription, setTodoDescription] = useState<string>('');
  const [toggleImportant, setToggleImportant] = useState<boolean>(false);

  const handleFormSubmit = () => {
    if (todoDescription.replace(/\s+/g, '').length === 0) return;
    addTodo(todoDescription, toggleImportant);
    setTodoDescription('');
    setToggleImportant(false);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>What do you need to be done?</Text>
      <TextInput
        style={[styles.input, inputActive && styles.input__active]}
        value={todoDescription}
        onChangeText={(v) => setTodoDescription(v)}
        onSubmitEditing={handleFormSubmit}
        autoFocus
        onFocus={() => setInputActive(true)}
        onBlur={() => setInputActive(false)}
      />
      <View style={styles.toggleContainer}>
        <Switch
          trackColor={{ false: '#27B0871A', true: COLORS.primary }}
          thumbColor={toggleImportant ? COLORS.light : COLORS.lightGray}
          style={styles.toggle}
          value={toggleImportant}
          onValueChange={(v) => setToggleImportant(v)}
        />
        <Text style={styles.toggleLabel}>Important task</Text>
      </View>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: COLORS.light, radius: 40 }}
        onPressOut={() => handleFormSubmit()}
      >
        <View style={styles.button}>
          <FA name="plus" color="#fff" size={30} />
        </View>
      </Pressable>
    </View>
  );
};

export default AddTodoForm;
