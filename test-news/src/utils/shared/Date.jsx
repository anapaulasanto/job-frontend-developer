export function formatDate(dateString) {
    if (!dateString) return "Data inválida";

    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };

    const date = new Date(dateString);
    if (isNaN(date)) return "Data inválida";

    return new Intl.DateTimeFormat('en-US', options).format(date);
}
