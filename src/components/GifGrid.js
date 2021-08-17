import React from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);//Los dos puntos son para renombrar

    return (
        <>
         <h3>{category}</h3>

        {loading && <p className="animate__animated animate__flash">Loading.....</p>}

            < div className = "card-grid" >

                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img} //este spread envia cada propiedad por separado 
                        />
                    ))
                }
            
        </div>
        </>
    )
}


