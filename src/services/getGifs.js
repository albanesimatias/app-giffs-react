const apiKEY = 'Kv5vrDrAbZxQ5a1aE39500N8C1Tj8CAm'

export default function getGifs ({keyword = 'morty'}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                //const data = response.data
                const gifs = response.data.map( image => {
                    const {images, title, id} = image
                    const {url} = images.downsized_medium
                    return {title, id, url}
                })
                return gifs
            })
}