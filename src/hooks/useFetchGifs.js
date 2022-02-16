import { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //solo se ejecuta getGif 1 vez []  [category] solo se ejecuta cuandp cambia category
    useEffect(()=> {
        getGift(category)
            .then(imgs => setState({
                data: imgs,
                loading: false
            }))
    },[category])

  return state;
}
