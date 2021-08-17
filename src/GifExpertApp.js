import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

//GifExpertApp
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']); 
    //El useState osea los hooks es lo que hace que se renderize en tiempo real

    /* const handleAdd = () =>{
        //setCategories( ['HunterXHunter', ...categories] );
        setCategories( cats => [ ...cats, 'HunterXHunter'] );
        //El parametro guarda el state anterior y lo renderiza con el spread para agregar el nuevo elemento
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>( //Parentesis indica que returna un objeto
                        <GifGrid 
                        key = {category}
                        category = {category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

