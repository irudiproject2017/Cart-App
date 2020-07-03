import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../context';

const AddNote = () => {
    const { dispatch } = useContext(NotesContext);
    const [value, setValue] = useState(''); //initialState as String for useState so it s local state for Add Comp

    let ref = useRef(); // To get focused on the input DOM on load

    useEffect(() => {
      ref.current.focus();
    },[]);

    // every time we type in the input this method runs and update the localstate(value in useState)
    function handleChange(e) {
      setValue(e.target.value);
    }
    // this method will run on submit the form
    //preventDefault() method stops the default action of an element from happening.
    let handleSubmit = e => {
      e.preventDefault();
      if (value.trim() === '') {
        alert('Please Add Item');
      } else {
        dispatch({ type: 'ADD_NOTE', payload: value });
        setValue(''); // setting to empty string
      }
    };

    return (
      <div className='note-form'>
        <form onSubmit={handleSubmit} action=''>
          <input type='text' ref={ref} onChange={handleChange} value={value} />
          <button>Add Item</button>
        </form>
      </div>
    );
}

export default AddNote
