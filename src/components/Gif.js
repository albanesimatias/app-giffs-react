import React from "react";

export default function Gif({title, url}) {
    return (<picture className='ListOfGifs-item'>
                <img alt={title} src={url}/>
            </picture>)
}