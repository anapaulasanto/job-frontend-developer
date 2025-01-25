const key = '29eae89ffe6d4d589c9c8f24f7ebab73';

export const DataApi = {
    urlSearch: (search) => `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`,
    urlView: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
};
