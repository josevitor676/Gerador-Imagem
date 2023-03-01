import styled from "styled-components";

export const ContainerFav = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: var(--font);
    background-color: #fffcf2;
    
`

export const HeaderFav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black; 
    h2 {
        margin-left: 20px;
    }
    button {
        margin-right: 20px;
        padding: 5px;
        background-color: black;
        border: 2px solid black;
        color: white;
        font-size: 14px;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: ease-in-out 0.8s;
        :hover {
            background-color: white;
            border: 2px solid black;
            color: black;
        }
    }
    @media (min-width:425px) and (max-width:768px) {
        height: 13%; 
    }
    @media(min-width:769px) and (max-width:1024px) {
        height: 18%;        
    }
    @media (min-width:1025px) and (max-width:1440px) {
        height: 14%;
    }
    @media(min-width:1441px) and (max-width:1920px){
        height: 14%;
    }
`


// @media (min-width:425px) and (max-width:768px)
// @media(min-width:769px) and (max-width:1024px)
// @media (min-width:1025px) and (max-width:1440px)
// @media(min-width:1441px) and (max-width:1920px)