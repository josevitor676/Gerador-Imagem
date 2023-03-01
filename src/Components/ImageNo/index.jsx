import { MdHideImage } from "react-icons/md"
import { NoImage } from "./styles"

export const ImageNo = ({title, description}) => {
    return (
        <NoImage>
        <h4>{title}</h4>
        <p>{description}</p>
        <MdHideImage/>
      </NoImage>
    )
}

//Para gerar sua Imagem bastar digitar as características da imagem e a quantidade e apertar o botão gerar imagem.
//Dica: quanto mais específico você for melhor será a imagem.