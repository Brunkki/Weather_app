export const formatTime = (timestamp) => {
    const datetime = new Date(timestamp * 1000)
    const hours = datetime.getHours()
    const minutes = ('0' + datetime.getMinutes()).slice(-2)
    return `${hours}:${minutes}`
}