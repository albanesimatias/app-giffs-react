import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export default function UseGifs({keyword}){
    const [gifs, setGifs] = useState([])
    useEffect(function () {
      getGifs({keyword}).then(gifs => setGifs(gifs))
    }, [keyword])
    
    return gifs
}