export default function generateHeading(title) {
    const formatedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    return formatedTitle
}