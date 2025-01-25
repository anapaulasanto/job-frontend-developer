import generateHeading from "./shared/Heading";
import generateId from "./shared/Id";

function readCount(item, navigate) {
    const id = generateId();
    const heading = generateHeading(item.title);

    const viewedNews = JSON.parse(localStorage.getItem("viewedNews")) || {};

    const currentViews = viewedNews[item.title] || 0;

    if (currentViews >= 2) {
        navigate(`/block`, { state: 'Você já leu essa notícia duas vezes, que tal outra?' });
    } else {
        viewedNews[item.title] = currentViews + 1;
        localStorage.setItem("viewedNews", JSON.stringify(viewedNews));
        navigate(`/details/everything/${heading}-${id}`, { state: item });
    }
}

export default readCount;