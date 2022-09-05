import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import ListOfGifs from './components/ListOfGifs';

export default function App() {
  const [keyword, setKeyword] = useState('todo');
  let aux = '';
  return (
    <div className='Container'>
      <Banner url={'https://www.paragyte.com/img/React_Banner.png'} />
      <form onSubmit={(evt) => { evt.preventDefault(); setKeyword(aux) } }>
        <input type={'text'} placeholder='Buscar...' onChange={ (event) => { aux=event.target.value } }></input>
      </form>
      <ListOfGifs keyword={keyword}/>
    </div>
  );
}

