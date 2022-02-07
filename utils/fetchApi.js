import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

 
export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c3380becc0msh449e7b627761adbp18184cjsn46a02eb08702'
        }
    });
    return data
}