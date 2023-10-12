import { useState } from 'react';
import Note from '../note/Note';

export default function Controls() {
    const [notes, setNotes] = useState([] as string[])
    const [message, setMessage] = useState('');

    function addNote() {
        if (message.length === 0) {
            window.alert("Cannot post empty note!");
            return;
        }

        setNotes([...notes, message]);
        setMessage('');
    }

    function changeMessage(props: {e: any}) {
        props.e?.target.value
    }

    return (
        <>
            <textarea id="notepad" onClick={changeMessage} />

            <div id="controls">
                <button onClick={addNote} />
            </div>
        </>
    )
}