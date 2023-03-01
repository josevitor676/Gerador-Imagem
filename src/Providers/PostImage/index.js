import axios from "axios";
import { createContext, useContext, useState } from "react";

export const ImageContenxt = createContext();

export const ImageProvider = ({children}) => {

    const [image, setImage] = useState([])
    const [favoritas, setFavoritas] = useState([])
    

    const PostImage = (dados) => {
        axios.post(`https://api.openai.com/v1/images/generations`, dados, 
            {
                headers: {
                    "Authorization": "Bearer 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"
                }
            
            }
        )
        .then((response) => setImage(response.data))
        .catch(err => console.log(err))
    }

    const setImageFavoritas = (img) => {
        setFavoritas([...favoritas, img])
        
    }

    const removeFromFavoratias = (img) => {
        const newFav = favoritas.filter((imgFav) => imgFav.url !== img.url)
        setFavoritas(newFav)
    }


    return (
        <ImageContenxt.Provider value={{PostImage, image, setImageFavoritas, favoritas, removeFromFavoratias}}>
            {children}
        </ImageContenxt.Provider>
    )
}

export const useImage = () => useContext(ImageContenxt)