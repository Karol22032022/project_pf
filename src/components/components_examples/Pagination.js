import {useState} from "react";

export const usePagination = (posts, defaultPage = 1, amountPerPage = 3) => {
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [postsPerPage] = useState(amountPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = [];
    let amountOfPages = 0;
    if (Array.isArray(posts)) {
        currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        amountOfPages = Math.ceil(posts.length / postsPerPage);
    }
    return {
        setCurrentPage,
        amountOfPages,
        currentPosts,
    };
};