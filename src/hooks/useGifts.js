import { useContext, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../contexts/GifsContext'

export default function UseGifs({keyword}){
    const {gifs, setGifs} = useContext(GifsContext)
    useEffect(function () {
      getGifs({keyword}).then(gifs => setGifs(gifs))
    }, [keyword, setGifs])
    
    return gifs
}