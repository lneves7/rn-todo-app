import { createContext, FC, useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Todo } from '../types';

interface TodoListContextProps {
  todos: Todo[];
  completedTodos: Todo[];
  addTodo?: (description: string, important: boolean) => void;
  completeTodo?: (todoId: string) => void;
  removeTodo?: (todoId: string) => void;
}

export const TodoListContext = createContext<TodoListContextProps>({
  todos: [],
  completedTodos: [],
});

export const TodoListContextProvider: FC<any> = ({ children }) => {
  const [dataSource, setDataSource] = useState<Todo[]>([]);

  const todos = useMemo(() => {
    const incomplete = dataSource.filter(({ completedAt }) => completedAt === null);
    const importantTodos = incomplete.filter((todo) => todo.important);
    const nonImportantTodos = incomplete.filter((todo) => !todo.important);
    return [...importantTodos, ...nonImportantTodos];
  }, [dataSource]);

  const completedTodos = useMemo(
    () => dataSource.filter(({ completedAt }) => completedAt !== null),
    [dataSource]
  );

  const addTodo = useCallback(
    (description: string, important: boolean) => {
      const data = {
        id: nanoid(9),
        description,
        important,
        completedAt: null,
      } as Todo;
      setDataSource((prevDataSource) => [data, ...prevDataSource]);
    },
    [dataSource]
  );

  const removeTodo = useCallback(
    (todoId: string) => {
      const filteredDataSource = dataSource.filter(({ id }) => id !== todoId);
      setDataSource(filteredDataSource);
    },
    [dataSource]
  );

  const completeTodo = useCallback(
    (todoId: string) => {
      const updatedDataSource = dataSource.map((ds) => {
        const { id } = ds;
        const auxObj = Object.assign(ds);
        if (id === todoId) {
          auxObj.completedAt = new Date().toISOString();
        }
        return auxObj;
      });
      setDataSource(updatedDataSource);
    },
    [dataSource]
  );

  const providerValue = useMemo(
    () => ({
      todos,
      completedTodos,
      addTodo,
      completeTodo,
      removeTodo,
    }),
    [todos, completedTodos, addTodo]
  );

  return <TodoListContext.Provider value={providerValue}>{children}</TodoListContext.Provider>;
};
