export default function Note(props: {text: string}) {
    return (
        <div>
            <li className="note">
                {props.text}
            </li>
        </div>
    )
}