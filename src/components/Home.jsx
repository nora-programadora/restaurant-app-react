import React from "react";
import { Link } from "react-router-dom"

function Home () {
    return (
        <>
        <nav>
            <ul>
                <li> <Link to={'/'}> Home </Link></li>
                <li> <Link to={'/body'}>Body </Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Home