import React from 'react';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

const BlogOverzichtPagina = () => {

    return (
        <main className="pageContainer">
            <h1>You have written <strong>{posts.length}</strong> posts!</h1>
            {
                posts.map((post) =>
                <Link to={`/blog_posts/${post.id}`}>{post.title}</Link>)
            }
        </main>
    );
};

export default BlogOverzichtPagina;