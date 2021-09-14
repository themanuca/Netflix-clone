import React from "react";
import "./filmedestaque.css"

export default ({item})=>{
    console.log(item);

    let anoData = new Date(item.first_air_date);
    let genero = [];

    for(let i in item.genres){
        console.log(item.genres[i].name); //
        genero.push(item.genres[i].name);
    }

    return (
        <section className='destaque' style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='destaque-vertical'>
                <div className='destaque-horizontal'>
                    <div className='destaque-name'>{item.original_name}</div>
                    <div className='destaque-info'>
                        <div className='destaque-ponto'>{item.vote_average} Pontos </div>
                        <div className='destaque-ano'> {anoData.getFullYear()} </div>
                        <div className='destaque-temporada'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                    </div>
                
                    <div className='destaque-descricao'>{item.overview}</div>
                    <div className='destaque-butons'>
                        <a href={`/watch/${item.id}` }className='destaque-btn-assisti'>Assistir</a>
                        <a href={`/list/add${item.id}`}className='destaque-btn-lista'>+ Minha Lista</a>
                    </div>
                    <div className='destaque-genero'><strong>Gêneros: {genero.join(', ')}</strong></div>
                
                </div>
             </div>
            
        </section>
    )
}