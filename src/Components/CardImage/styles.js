import styled from "styled-components";

export const Container = styled.div`
    background-color: #fffcf2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 15px 0;
    //border-bottom: 2px solid black;
    align-items: center;
    height: auto;

    @media (min-width:425px) and (max-width:768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media(min-width:769px) and (max-width:1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: 900px;
    }
    @media (min-width:1025px) and (max-width:1440px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: 900px;
    }
    @media(min-width:1441px) and (max-width:1920px)  {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: 800px;
    }
`


export const ContentImage = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 6px;
    width: 80%;
    margin: 10px 0;

    img {
        width: 100%;
    }

    button {
        cursor: pointer;
        padding: 6px;
        background-color: black;
        color: white;
        border: none;
        font-family: var(--font);
        font-weight: bold;
        transition: ease-out 0.9s;
        :hover {
            background-color: transparent;
            color: black;
        }
    }

    @media (min-width:425px) and (max-width:768px) {
        width: 35%;
        margin: 10px;
    }

    @media(min-width:769px) and (max-width:1024px) {
        width: 25%;
        margin: 10px;
    }
    @media (min-width:1025px) and (max-width:1440px) {
        width: 22%;
        margin: 13px;
    }

    @media(min-width:1441px) and (max-width:1920px) {
        width: 22%;
        margin: 13px;
    }
`

// @media (min-width:425px) and (max-width:768px)
// @media(min-width:769px) and (max-width:1024px)
// @media (min-width:1025px) and (max-width:1440px)
// @media(min-width:1441px) and (max-width:1920px) 