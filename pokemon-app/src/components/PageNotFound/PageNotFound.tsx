import React from 'react'
import CONST_VARS from "../../const";

const PageNotFound = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">{CONST_VARS.NOT_FOUND_PAGE_TEXT}</h4>
            </div>
        </div>
    )
}

export default PageNotFound