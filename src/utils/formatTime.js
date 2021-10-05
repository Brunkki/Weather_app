export const formatTime = (timestamp) => {
    const datetime = new Date(timestamp * 1000)
    const hours = datetime.getHours()
    const minutes = ('0' + datetime.getMinutes()).slice(-2)
    return `${hours}:${minutes}`
}

export const formatDay = (timestamp) => {
    const dateTime = new Date(timestamp * 1000)
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    return `${day}.${month}`
}