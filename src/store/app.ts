import useFetchData from "../hooks/useFetchData";
import Store from "./index";

export interface stateInterface {
  selectedTodo: object,
  todos: Array<JSX.Element>,
}

export const initailState = {
  // Set the initial status of the application
  selectedTodo: {},
  todos: [],
};
export function useTodos(url: string) {
  const { loading, error, response } = useFetchData(url);
  const [{ app }, setStore] = Store.useStore();
  setStore((state: {app: stateInterface}) => {
    state.app.todos = response;
  });
  return {
    loading,
    error,
    response,
    app,
  };
}

export function useSelecteTodo() {
  const [{ app }, setStore] = Store.useStore();
  const onSelectTodos = (todo: object) => {
    setStore((state: {app: stateInterface}) => {
      state.app.selectedTodo = todo;
    });
  };
  return {
    onSelectTodos,
    todos: app,
  };
}
