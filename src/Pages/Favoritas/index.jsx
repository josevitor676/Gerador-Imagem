import { useNavigate } from "react-router-dom"
import { CardImage } from "../../Components/CardImage";
import { ImageNo } from "../../Components/ImageNo";
import {useImage} from "../../Providers/PostImage"
import { ContainerFav, HeaderFav } from "./styles";

export const Favoritas = () => {
    const  navigation = useNavigate();
    const {favoritas, removeFromFavoratias} = useImage()

    const ImageUnicas = [...new Set(favoritas)]
    
    return (
        <ContainerFav>
            <HeaderFav>
                <h2>Favoritas</h2>
                <button onClick={() => navigation("/home")}>Voltar</button>
            </HeaderFav>

            {ImageUnicas.length === 0 ?
                <ImageNo title="Sem nenhuma imagem favorita no momento" description="Para favoritar uma imagem vá para pagina principal."/>
            :
                <CardImage dadosImage={ImageUnicas} msgBtn="Deletar" funFav_Del={removeFromFavoratias}/>
            }
        </ContainerFav>
    )
}