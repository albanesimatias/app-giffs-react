import { apiKEY, baseURL } from "./settings"

export default function getTrendings (){
    const apiURL = `${baseURL}/trending/searches?api_key=${apiKEY}`
    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {data = []} = response
                return data
            })
}