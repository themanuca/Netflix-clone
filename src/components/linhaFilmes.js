import React from "react";
import "./linhaFilmes.css";
export default ({title, items})=>{
    return (
        <div className='linhafilme'>
            <h2>{title}</h2>
            <div className='linhafilme--listarea'>
                <div className='linhafilme--list'>
                    {items.results.length > 0 && items.results.map((item,key)=>(
                        <div key={key}className='linhafilme--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />

                        </div>   
                        

                ))}
                </div>
                
            </div>
        </div>
    )
    
} 