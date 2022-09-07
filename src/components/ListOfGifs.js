import UseGifs from '../hooks/useGifts';
import Gif from "./Gif"

export default function ListOfGifs({keyword}) {
  const gifs = UseGifs({keyword});
  return <div className='ListOfGifs'>{
            gifs.map(({id, title, url}) => <Gif key={id} id={id} title={title} url={url} />)
          }
          </div>
}