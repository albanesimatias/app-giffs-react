import React from "react";
import { useLocation } from "wouter";

export default function Buscador () {
    let search = ''
    const pushLocation = useLocation()[1];
    const handleSubmit = evt => {
      evt.preventDefault()
      pushLocation(`/search/${search}`)
    }
    const handleChange = evt => {
      search = evt.target.value;
    }
    return  <form onSubmit={handleSubmit}>
                <input type={'text'} placeholder='Search your gif here...' onChange={ handleChange }></input>
            </form>
}