import React from "react";
import Gif from "../../components/Gif"
import Logo from "../../components/Logo"
import useGlobalGifs from "../../hooks/useGlobalGifs";
export default function Detail({params}) {
    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    return (
            <div className="Container">
                <Logo url={'https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif'} />
                <div>
                    <Gif {...gif} />
                </div>
            </div>)
}