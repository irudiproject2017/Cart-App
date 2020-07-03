import uuid from 'uuid';
// reducer function takes action and based on the action type 
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':      
      const newNote = {
        id: uuid.v4(),// uuid is lib which gives uniq id and v4() is the version
        text: action.payload
      };

      const addedNotes = [...state.notes, newNote]; // adding obj of newNote

      // updating the notes array with the new note(addedNotes)
      return {
        ...state,
        notes: addedNotes
      };
      /// filter with the note id to delete the particular note
    case 'DELETE_NOTE':
      const deletedNotes = state.notes.filter(
        note => note.id !== action.payload
      );

      return {
        ...state,
        notes: deletedNotes
      };
      ///return the object and spreading the occurance state and getting the payload(note) passed in the action
      /// updating the current note
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      };
      // with the currentnote we are updateing the new text
    case 'UPDATE_NOTE':
      const updatedNote = {
        ...state.currentNote,
        text: action.payload
      };

      // to update the exact index of the notes array 
      const updatedNotesIndex = state.notes.findIndex(
        note => note.id === state.currentNote.id
      );
        // new notes array with the updated notes
      const updatedNotes = [
        ...state.notes.slice(0, updatedNotesIndex),// first part of the array pass all the notes and slice 
        updatedNote,// passing the updating notes
        ...state.notes.slice(updatedNotesIndex + 1)
      ];

      return {
        currentNote: null,
        notes: updatedNotes
      };
    default:
      return state;
  }
}
export default reducer