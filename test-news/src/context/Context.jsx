import { DataApi } from '../services/DataApi'
import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({ children }) => {
    const [news, setNews] = useState([]);

    async function handleView() {
        const urlView = DataApi.urlView
        const dataView = await axios.get(urlView)
        setNews(dataView.data.articles)
    }

    return (
        <Context.Provider value={{ news, setNews, handleView }}>
            {children}
        </Context.Provider>
    );
}