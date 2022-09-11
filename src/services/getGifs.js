import { apiKEY, baseURL } from "./settings"

export default function getGifs ({keyword = 'morty'}){
    const apiURL = `${baseURL}/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const gifs = response.data.map( image => {
                    const {images, title, id} = image
                    const {url} = images.downsized_medium
                    return {title, id, url}
                })
                return gifs
            })
}