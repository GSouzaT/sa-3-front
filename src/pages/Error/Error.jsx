import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <h1>Not found.</h1>
            <Link to='/home'>voltar para Homepage</Link>
        </>
    )
}

export default Error;