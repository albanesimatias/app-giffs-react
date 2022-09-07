import React from "react";
import {Link} from 'wouter'

export default function Gif({title, id, url}) {
    return (<picture className='ListOfGifs-item'>
                <Link to={`/gif/${id}`} className='Gif-link'>
                    <img alt={title} src={url}/>
                </Link>
                <h4 className="Gif-title">{title}</h4>
            </picture>)
}