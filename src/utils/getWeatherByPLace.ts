/* export const weatherByPlace = async (place: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=a5a47c18197737e8eeca634cd6acb581
    `;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

 */
import axios from "axios";

export const weatherByPlace = async (lat: number, lon: number) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a5a47c18197737e8eeca634cd6acb581&units=metric`);
    return response

}