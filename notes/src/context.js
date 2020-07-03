import React from 'react';
// Global state for the  project
const currentNote = null;
const notes =[];
const NotesContext = React.createContext({currentNote,notes});

export default NotesContext;
