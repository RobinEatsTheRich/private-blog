import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import { useNavigate } from 'react-router-dom';
function Nav({ auth, toggleAuth }) {
    const navigate = useNavigate();
    function signOut() {
        toggleAuth(false);
        navigate('/');
    }

    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            {auth && <Link to="/blog_overzicht">Blog Overzicht</Link>}
            {!auth && <Link to="/login">Login</Link>}
            {auth &&
                <button
                    type="button"
                    onClick={signOut}>
                    Log Out
                </button>}
        </nav>
        </>
    );
}
export default Nav;