export const weatherByPlace = async (place: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=a5a47c18197737e8eeca634cd6acb581
    `;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}