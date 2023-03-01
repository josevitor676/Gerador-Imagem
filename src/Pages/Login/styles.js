import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;

    @media(min-width:769px) and (max-width:1024px) {
        flex-direction: row;
    }
    @media (min-width:1025px) and (max-width:1440px) {
        flex-direction: row;
    }
    @media(min-width:1441px) and (max-width:1920px) {
        flex-direction: row;
    }
`

export const Apresentation = styled.div`
    font-family: var(--font);
    display: flex;
    height: 35%;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-color: #fffcf2;
    h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }
    p {
        font-size: 16px;
    }
    @media (min-width:426px) and (max-width:768px) {
        h1 {
            font-size: 33px;
            margin-bottom: 10px;
        }
        p {
            font-size: 17px;
        }
    }
    @media(min-width:769px) and (max-width:1024px) {
        height: 100vh;
        flex: 1;
        h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        height: 100vh;
        flex: 1;
        h1 {
            font-size: 30px;
            margin-bottom: 10px;
        }
        p {
            font-size: 17px;
        }
    }
    @media(min-width:1441px) and (max-width:1920px) {
        height: 100vh;
        flex: 1;
        h1 {
            font-size: 37px;
            margin-bottom: 10px;
        }
        p {
            font-size: 19px;
        }
    }
    
    
`


export const FormDiv = styled.div`
    background-color: #000;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width:769px) and (max-width:1024px) {
        height: 100vh;
        flex: 1;
    }
    @media (min-width:1025px) and (max-width:1440px) {
        height: 100vh;
        flex: 1;
    }
    @media(min-width:1441px) and (max-width:1920px){
        height: 100vh;
        flex: 1;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    height: 300px;
    //border: 2px solid white;
    width: 320px; 
    justify-content: space-around;
    align-items: center;
    //border-radius: 6px;

    label {
        display: flex;
        flex-direction: column;
        font-family: var(--font);
        font-size: 16px;
        color: white;

        input {
            width: 260px;
            padding: 7px;
            border-radius: 4px;
            outline: none;
            border: 1px solid white;
            font-weight: bold;
            font-size: 14px;
            background-color: #fffcf2;
            ::placeholder {
                color: black;
            }
        }
    } 
    
    button {
        width: 260px;
        padding: 7px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 14px;
        border: 1px solid white;
        background-color: transparent;
        color: white;
        font-weight: bold;
        :hover {
            background-color: white;
            color: black;
        }
    }

    @media (min-width:375px) and (max-width:425px) {
        border: 2px solid white;
        border-radius: 6px;
        height: 320px;
    }
    @media (min-width:426px) and (max-width:768px) {
        border: 2px solid white;
        border-radius: 6px;
        height: 330px;
    }
    @media(min-width:769px) and (max-width:1024px) {
        border: 2px solid white;
        border-radius: 6px;
        height: 370px;
        width: 330px;
    }
    @media (min-width:1025px) and (max-width:1440px) {
        border: 2px solid white;
        border-radius: 6px;
        height: 390px;
        width: 330px;
        label {
            input {
                width: 280px;
            }
        }

        button {
            width: 280px;
        }
    }
    @media(min-width:1441px) and (max-width:1920px) {
        border: 2px solid white;
        border-radius: 6px;
        height: 420px;
        width: 350px;

        label {
            font-size: 18px;
            input {
                width: 280px;
                padding: 10px;
            }
            
        }

        button {
            width: 280px;
            padding: 10px;
            font-size: 16px;
        }
    }
`

// @media (min-width:425px) and (max-width:768px)
// @media(min-width:769px) and (max-width:1024px)
// @media (min-width:1025px) and (max-width:1440px)
// @media(min-width:1441px) and (max-width:1920px)
