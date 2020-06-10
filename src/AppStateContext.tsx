import React, { createContext, useContext } from 'react';

interface Task {
  id: string,
  text: string
};

interface List {
  id: string,
  text: string,
  tasks: Task[]
};

export interface AppState {
  lists: List[]
};

interface AppStateContextProps {
  state: AppState
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appData: AppState = {
  lists: [
    {
      id:'0',
      text:'To Do',
      tasks: [
        { 
          id:'c0', 
          text:'Generate app scaffold'
        }
      ]
    }
  ]
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};