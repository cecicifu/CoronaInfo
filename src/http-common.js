import Axios from 'axios';

export const CORONAVIRUS = Axios.create({
    baseURL: `https://coronavirus-monitor.p.rapidapi.com/coronavirus/`,
    headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ae6918fb94msh0af49f8ccaae469p1cc5f1jsn88544c534fd6"
    }
})

export const GITHUB = Axios.create({
    baseURL: `https://api.github.com/repos/cecicifu/coronainfo/`,
    headers: {
        "Authorization": "Token d98ebe0c9d442b673b985c9208f77731d3670cb6"
    }
})