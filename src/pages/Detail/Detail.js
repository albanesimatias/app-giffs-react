import React, { useContext } from "react";
import Gif from "../../components/Gif"
import GifsContext from "../../contexts/GifsContext";
import Logo from "../../components/Logo"
export default function Detail({params}) {
    const {gifs} = useContext(GifsContext)
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    return (
            <div className="Container">
                <Logo url={'https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif'} />
                <div>
                    <Gif {...gif} />
                </div>
            </div>)
}