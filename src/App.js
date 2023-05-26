import React, {useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
//Pages
import LoginPagina from "./pages/Login pagina/LoginPagina";
import BlogOverzichtPagina from "./pages/Blog overzicht pagina/BlogOverzichtPagina";
import BlogPostPagina from "./pages/Blogpost pagina/BlogPostPagina";
import HomePagina from "./pages/Home pagina/HomePagina";
import NotFound from "./pages/NotFound/NotFound";
//Components
import Nav from "./components/Nav/Nav";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuth, toggleIsAuth] = useState(false);

    return (
        <>
            <Nav auth={isAuth} toggleAuth={toggleIsAuth}/>
            <Routes>
                <Route path="/" element={<HomePagina/>}/>
                <Route path="/login" element={<LoginPagina toggleAuth={toggleIsAuth}/>} />
                <Route path="/blog_overzicht" element={
                    isAuth ? <BlogOverzichtPagina/> :<Navigate to="/login"/>}/>
                <Route path="/blog_posts/:id" element={
                    isAuth ? <BlogPostPagina/> :<Navigate to="/login"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;