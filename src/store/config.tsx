import * as React from "react";
import { useImmer } from "use-immer";
import { stateInterface } from './app'

// Configuring the conext store.

interface Props {
  initialState?: stateInterface,
  children?: React.ReactNode;
}

export default function configStore() {

  const context = React.createContext<any | null>(null);
  
  const Provider = (props: Props) => {
    const [state, setState] = useImmer(props.initialState);
    const contextValue = React.useMemo(() => [state, setState], [state]);
    return (
      <context.Provider value={contextValue}>{props.children}</context.Provider>
    );
  };

  const useStore = () => React.useContext(context);

  return {
    Provider,
    useStore,
  };
}
