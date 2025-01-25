export default function generateId() {
    const randomString = Math.random().toString(36).substring(2, 10).toUpperCase()

    return randomString
}