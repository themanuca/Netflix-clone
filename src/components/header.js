import React from "react";
import "./header.css";

export default ({preto})=>{
    return (
        <header className={preto ? 'preto': ''}>
            <div className='hd-logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'></img>
                </a>
            </div>
        </header>
    )
}