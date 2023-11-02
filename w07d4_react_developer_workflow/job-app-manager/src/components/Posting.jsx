import { useState } from 'react';
import './Posting.css';

function Posting(props) {

    const [notes, setNotes] = useState('');

    const changeHandler = (event) => { setNotes(event.target.value) };

    console.log('notes', notes);

    return (
        <article>
            <h1>{ props.title }</h1>
            <p>Closing Date: { props.closing_date }</p>
            <p>{ props.description }</p>
            <a href={ props.link }>Would you like to know more?</a>
            <br/>
            <input type="text" onChange={ changeHandler } value={notes}/>
        </article>
    );

}

export default Posting;