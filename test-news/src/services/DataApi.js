const key = '7c14205ae28f4d4aa70041b1db3093e9';

export const DataApi = {
    urlSearch: (search) => `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`,
    urlView: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
};
