import React, { useContext, useReducer } from 'react';
import Nav from './components/Nav';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';
import NotesContext from './context';
import reducer from './reducer';

const App = () => {
  const initialState = useContext(NotesContext); // set the variable as initialState
  const [state, dispatch] = useReducer(reducer, initialState); // this gives us back state and dispatch
  return (
    // passing object context to child components to consume 
    <NotesContext.Provider value={{ state, dispatch }}> 
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
          <EditNote />
        )}
    </NotesContext.Provider>
  );
}

export default App;
