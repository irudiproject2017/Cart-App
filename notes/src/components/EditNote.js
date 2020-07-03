import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../context';

const EditNote = () => {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currentNote.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  },[]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      alert('Cannot have blank Item');
    } else {
      dispatch({ type: 'UPDATE_NOTE', payload: value });
      setValue('');
    }
  };

  return (
      <div className='note-form'>
        <form onSubmit={handleSubmit} action=''>
          <textarea
            ref={ref}
            onChange={handleChange}
            value={value}
            name=''
            id=''
            cols='30'
            rows='10'
          />
          <div style={{ textAlign: 'right' }}>
            <button>Update</button>
          </div>
        </form>
      </div>
  );
}
export default EditNote