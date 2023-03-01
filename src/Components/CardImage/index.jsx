import { ContentImage, Container } from "./styles"

export const CardImage = ({dadosImage, funFav_Del, msgBtn}) => {

    

    return (
        <Container>
        {dadosImage.map((photo,index) => {
            return(
            <ContentImage key={index}>
                <img src={photo.url} alt={photo.url}/>
                <button onClick={() => funFav_Del(photo)}>{msgBtn}</button>
            </ContentImage>
            )
        })}    
        </Container>
    )
}