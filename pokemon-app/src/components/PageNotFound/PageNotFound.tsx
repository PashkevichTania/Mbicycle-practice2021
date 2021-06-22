import React from 'react'
import {WARNINGS} from "../../const";

const PageNotFound = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">{WARNINGS.NO_PAGE}</h4>
            </div>
        </div>
    )
}

export default PageNotFound