import React from 'react';
import posts from '../../data/posts.json';
import {useParams} from "react-router-dom";

const BlogPostPagina = () => {
    const { id } = useParams();

    return (
        <main className="pageContainer">
            <h2 className="title">{posts[id].title}</h2>
            <p className="content">{posts[id].content}</p>
            <p className="date">{posts[id].date}</p>

        </main>
    );
};

export default BlogPostPagina;