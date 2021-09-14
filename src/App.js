import React,{useEffect, useState} from "react";
import tmdb from "./tmdb";
import "./App.css"
import Filmedestaque from "./components/filmedestaque";
import LinhaFimes from "./components/linhaFilmes"
import Header from "./components/header";




export default ()=>{


  const [movieList, setMovieList] = useState([]);
  const [destaquedados,setdestaquedados]=useState(null);
  const [topPreto, settopPreto]=useState(false);

  useEffect(() => {
    const loadall = async () =>{

      //Pegando a lista TOTAL

      let list = await tmdb.getHomeList();
      setMovieList(list);

      //Pegando o destaque
      let original = list.filter(i=>i.slug === 'originals');
      let numeroRandom = Math.floor(Math.random()*(original[0].items.results.length -1));
      let filmeescolhido = original[0].items.results[numeroRandom];

      let filmeInfo = await tmdb.getfilmeInfo(filmeescolhido.id,'tv');
      
      setdestaquedados(filmeInfo);
    }

    loadall();

  }, []);

  useEffect(()=>{
    const scrollVeri = ()=>{
      if(window.scrollY> 10){
        settopPreto(true);

      }
      else{
        settopPreto(false);
      }
    }
    window.addEventListener('scroll', scrollVeri);
    return()=>{
      window.removeEventListener('scroll', scrollVeri);
    }
  },[]);

  return ( 

    <div className='page'>

      
      <Header preto={topPreto} />


      {destaquedados &&
        < Filmedestaque item={destaquedados} />
      }
      <section className='lists'>
        {movieList.map((item, key)=>(   //.map é um LOOP para pare percorrer a lista

          < LinhaFimes key={key} title={item.title} items={item.items}/>
        
        ))}
      </section>
    </div>
    
  )

}
