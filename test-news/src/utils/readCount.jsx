import generateHeading from "./shared/Heading";
import generateId from "./shared/Id";

function readCount(item, navigate) {
    const id = generateId();
    const heading = generateHeading(item.title);

    // Obter as notícias visualizadas do localStorage
    const viewedNews = JSON.parse(localStorage.getItem("viewedNews")) || {};

    // Contar o total de notícias lidas
    const totalViews = Object.values(viewedNews).reduce((acc, curr) => acc + curr, 0);

    // Verificar se o total de leituras excede 10
    if (totalViews >= 10) {
        navigate(`/block`, { state: 'Você já leu 10 notícias, que tal dar uma pausa?' });
        return;
    }

    // Contar as visualizações atuais da notícia específica
    const currentViews = viewedNews[item.title] || 0;

    // Verificar se a notícia foi lida mais de 2 vezes
    if (currentViews >= 2) {
        navigate(`/block`, { state: 'Você já leu essa notícia duas vezes, que tal outra?' });
    } else {
        // Atualizar o contador da notícia e salvar no localStorage
        viewedNews[item.title] = currentViews + 1;
        localStorage.setItem("viewedNews", JSON.stringify(viewedNews));

        // Navegar para os detalhes da notícia
        navigate(`/details/everything/${heading}-${id}`, { state: item });
    }
}

export default readCount;
