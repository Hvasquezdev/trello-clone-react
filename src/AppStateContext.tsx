import React, { createContext, useContext, useReducer } from 'react';
import { nanoid } from 'nanoid';
import { findItemById } from './utils/findItemById';

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
  state: AppState,
  dispatch: any
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type Action = 
  | { type: 'ADD_LIST', payload: string }
  | { type: 'ADD_TASK', payload: { text: string, listId: string } }


export const AppStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            text: action.payload,
            tasks: []
          }
        ]
      }

    case 'ADD_TASK':
      const targetListIndex = findItemById(
        state.lists,
        action.payload.listId
      );

      state.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text
      });

      return {
        ...state
      }

    default:
      return state;
  }
};

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
    },
    {
      id:'1',
      text:'In Progress',
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
  const [state, dispatch] = useReducer(AppStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
