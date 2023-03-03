import React from "react";
import { Link } from "react-router-dom"

function Body () {
    return (
        <>
         <nav>
            <ul>
                <li> <Link to={'/'}> Home </Link></li>
                <li> <Link to={'/body'}>Body </Link></li>
            </ul>
        </nav>
        <h1>Body</h1>
        </>
    )
}

export default Body