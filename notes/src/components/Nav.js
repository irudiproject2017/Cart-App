import React, { useContext } from 'react';
import NotesContext from '../context';

const Nav = () => {
  const { state } = useContext(NotesContext)
  console.log(state);
  return (
    <header>
      <div>CART APP</div>
      <div>Number of Items<span> :&nbsp; {state.notes.length}</span></div>
    </header>
  );
}
export default Nav