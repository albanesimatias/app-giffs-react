import Buscador from "../../components/Buscador";
import ListOfGifs from "../../components/ListOfGifs";
import Logo from "../../components/Logo";

export default function SearchResults ({ params }) { 
  const {keyword} = params
  return (
    <div className='Container'>
      <Logo url={'https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif'} />
      <Buscador/>
      <ListOfGifs keyword={keyword}/>
    </div>
  );
}