import { useState } from 'react';
import Note from './components/note/Note';
import Controls from './components/controls/Controls';
import './App.css';

function App() {
  const [noteCount, setCount] = useState(0);

  return (
    <>
      <h1>list</h1>
      
      <Controls />
      <div id="list">
        <Note text={"Hello World!"}/>
        <Note text={"Test"}/>
        <Note text={"Hello Hello"}/>
      </div>
    </>
  );
}

export default App;
