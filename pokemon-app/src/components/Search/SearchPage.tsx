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
            <div className="search-container container">
                <h4 className="center">{LABELS.SEARCH}</h4>
                <form action="submit" onSubmit={onSubmitHandler}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"/>
                        <button type="submit" className="btn btn-outline-secondary">search!</button>
                    </div>
                </form>
                <div id="search-result"></div>
                {name ? <Search name={name}/> : <div></div>}
            </div>
        </div>
    )
}

export default SearchPage