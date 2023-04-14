import { useEffect, useState } from "react"; // useEffect, dispara efecto cuando cambia lo que se indica

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
  
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    } 

    useEffect( () => {
        getImages();
    } , [ ])


    return { 
        images, //images: images
        isLoading //isLoading: isLoadin
    }

}
