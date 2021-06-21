import React, {useEffect, useState} from 'react'
import CONST_VARS from "../../const";
import Search from "./Search";

const SearchPage = () => {
    const [name, setName] = useState('');
    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        setName(event.target[0].value)
    }


    return (
        <div>
            <div className="container">
                <h4 className="center">{CONST_VARS.SEARCH_TEXT}</h4>
                <form action="submit" onSubmit={onSubmitHandler}>
                    <input type="text" />
                    <button type="submit">search!</button>
                </form>
                <div id="search-result"></div>
                {name ? <Search name={name}/> : <div>no pokemon</div>}
            </div>
        </div>
    )
}

export default SearchPage