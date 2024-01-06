import { createContext, FC, useCallback, useMemo, useState } from "react";
import { Todo } from "../types";
import { nanoid } from "nanoid/non-secure";

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
    return dataSource.filter(({ completedAt }) => completedAt === null);
  }, [dataSource]);

  const completedTodos = useMemo(() => {
    return dataSource.filter(({ completedAt }) => completedAt !== null);
  }, [dataSource]);

  const addTodo = useCallback(
    (description: string, important: boolean) => {
      const data = {
        id: nanoid(9),
        description,
        important,
        completedAt: null,
      } as Todo;

      setDataSource((prevDataSource) => [...prevDataSource, data]);
    },
    [dataSource]
  );

  return (
    <TodoListContext.Provider
      value={{
        todos,
        completedTodos,
        addTodo,
        // completeTodo,
        // removeTodo,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
