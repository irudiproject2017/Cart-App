import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context';

// in this comp we use useContext because we need to grab the state of notes array and render
const NoteList = () => {
  const { state } = useContext(NotesContext);

  return (
    <div className='notes-container'>
      {state.notes.map((note, i) => {
        return <Note note={note} key={i} />; // passing the props to Note comp
      })}
    </div>
  );
}

export default NoteList