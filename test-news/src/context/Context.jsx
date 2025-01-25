import { DataApi } from '../services/DataApi'
import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [hasSearchResults, setHasSearchResults] = useState(true);

    async function handleView() {
        const urlView = DataApi.urlView
        const dataView = await axios.get(urlView)
        setNews(dataView.data.articles)
    }

    const handleSearch = async (ev, navigate, inputRef) => {
        if (ev.key === "Enter") {
            const search = inputRef.current.value;
            const url = DataApi.urlSearch(search);
            const data = await axios.get(url);
            const articles = data.data.articles;

            if (articles.length > 0) {
                setNews(articles);
                navigate("/results");
                setHasSearchResults(true);
            } else {
                console.log("Erro ao pegar dados da api");
                setHasSearchResults(false);
            }
        }
    }

    return (
        <Context.Provider value={{ news, setNews, handleView, handleSearch, hasSearchResults, setHasSearchResults }}>
            {children}
        </Context.Provider>
    );
}