import { useState } from 'react';
import Note from '../note/Note';

export default function Controls(props: {value: string, onchange: any, onclick: any}) {
    return (
        <>
            <textarea id="notepad" onChange={props.onchange} value={props.value}>{props.value}</textarea>

            <div id="controls">
                <button onClick={props.onclick}>Post</button>
            </div>
        </>
    )
}