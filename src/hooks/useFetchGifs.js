import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = ( category ) =>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() => { //El use effect es para evitar que asi haya otra funcion, esta solo se renderice una vez 
        getGifs(category)
            .then(imgs => {
                setState({ 
                    data:imgs,
                    loading:false
                });
            })
    }, [category])

    return state; // {data:[], loading: true};
}