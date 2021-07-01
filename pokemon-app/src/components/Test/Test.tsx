import React, {useCallback, useEffect, useMemo, useState} from 'react';



const Test = () => {
    console.log('set')
    const [counter, setCounter] = useState(0)
    const [message, setMessage] = useState('hello')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function createPerson(firstName: string, lastName: string) {
        console.log('create person:', firstName, lastName)
        return `${firstName} ${lastName}`
    }
    const person = useMemo(() => createPerson(firstName, lastName), [firstName, lastName]);

    const greeting = useCallback((text: string) => {
        console.log(text);
    }, []);

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);

    return (
        <div id="test" className="container">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={() => setCounter(counter - 1)}>-</button>
                <div className="counter">counter: {counter}</div>
                <button type="button" className="btn btn-success" onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <br/>
            <input type="text" placeholder={'first name'} value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            <input type="text" placeholder={'last name'} value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            <p>Person: {person}</p>
            <input type="text" placeholder={'message:'} value={message} onChange={(event) => setMessage(event.target.value)}/>
        </div>
    );
};

export default Test;