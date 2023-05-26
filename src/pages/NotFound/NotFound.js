import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <main className="pageContainer">
            <h1>404</h1>
            <h2>This page wasn't found</h2>
            <p>Back to the <strong><Link to="/">home page</Link></strong>.</p>
        </main>
    );
};

export default NotFound;