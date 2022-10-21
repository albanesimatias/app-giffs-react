import React from "react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendings from "../services/getTrendings";

export default function TrendringSearchs () {
    const [popular_gifs, setPopular_gifs] = useState([])
    useEffect( function (){
        getTrendings().then(setPopular_gifs)
    },[])

    return <ul className="ListOfGifs">
                {popular_gifs.map((popularGif) => (
                <li className="Li-item" key={popularGif}>
                    <Link to={`search/${popularGif}`}>
                        {popularGif}
                    </Link>
                </li>))}
            </ul>
}