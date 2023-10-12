import { useState } from 'react';
import Note from './components/note/Note';
import Controls from './components/controls/Controls';
import './App.css';

function App() {
  const [notes, setNotes] = useState([] as string[])
  const [message, setMessage] = useState('');

  function addNote() {
    if (message.length === 0) {
        window.alert("Cannot post empty note!");
        return;
    }

    setNotes([...notes, message]);
    setMessage("");
  }

  function changeMessage(e: any) {
      e.preventDefault();
      setMessage(e?.target.value);
  }

  return (
    <>
      <h1>list</h1>
      
      <Controls value={message} onchange={changeMessage} onclick={addNote}/>
      <div id="list">
        {notes.map((message) => (
          <Note text={message}></Note>
        ))}
      </div>
    </>
  );
}

export default App;
