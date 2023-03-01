import styled from "styled-components";

export const NoImage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    text-align: center;
    border-bottom: 2px solid black;

    h4 {
        margin: 0 25px;
    }

    p {
        margin: 0 25px;
        font-size: 13px;
    }
    svg {
        margin: 0 auto;
        font-size: 40px;
    }
    @media(min-width:769px) and (max-width:1024px) {
        justify-content: space-evenly;
        align-items: center;

        h4 {
            width: 500px;
        }
        p {
            font-size: 15px;
        }
        svg {
            margin: 0 auto;
            font-size: 50px;
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        justify-content: space-evenly;
        align-items: center;
        h4 {
            width: 650px;
            font-size: 23px;
        }
        p {
            font-size: 17px;
        }
        svg {
            margin: 0 auto;
            font-size: 60px;
        }
    }

    @media(min-width:1441px) and (max-width:1920px) {
        justify-content: space-evenly;
        align-items: center;
        h4 {
            width: 700px;
            font-size: 25px;
        }
        p {
            font-size: 18px;
        }
        svg {
            margin: 0 auto;
            font-size: 70px;
        }
    }
`