import React, {useState} from 'react'
import Search from "./Search";
import {LABELS} from "../../const";

const SearchPage = () => {
    const [name, setName] = useState('');
    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        setName(event.target[0].value)
    }


    return (
        <div>
            <div className="container">
                <h4 className="center">{LABELS.SEARCH}</h4>
                <form action="submit" onSubmit={onSubmitHandler}>
                    <input type="text" />
                    <button type="submit">search!</button>
                </form>
                <div id="search-result"></div>
                {name ? <Search name={name}/> : <div></div>}
            </div>
        </div>
    )
}

export default SearchPage