import Axios from 'axios'

export const Coronavirus = Axios.create({
    baseURL: `https://coronavirus-monitor.p.rapidapi.com/coronavirus/`,
    headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ae6918fb94msh0af49f8ccaae469p1cc5f1jsn88544c534fd6"
    }
})