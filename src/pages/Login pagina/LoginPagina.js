import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPagina = ({ toggleAuth }) => {

    const navigate = useNavigate();
    function signIn() {
        toggleAuth(true);
        navigate('/');
    }
    return (
        <main className="pageContainer">
            <button
                type="button"
                onClick={signIn}>
                Inloggen
            </button>
        </main>

    );
};

export default LoginPagina;