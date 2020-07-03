import React, { useContext } from 'react';
import NotesContext from '../context';

// get the note props from the NoteList comp
const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <div className='note'>
      <p>{note.text}</p>
      <div className='btn-container'>
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note })}
          className='edit'
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note.id })}
          className='delete'
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Note

/// dispatch is a function and passing object of type  and payload 