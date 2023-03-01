import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: var(--font);
    background-color: #fffcf2;

    
`

export const Header = styled.div`
    height: 35%;
    border-bottom: 3px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .titleHeader {

        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            font-weight: bold;
            font-size: 19px;
            margin-top: 10px;
            text-align: center;
        }
    }

    

    div {
        display: flex;
        width: 100%;
        justify-content: space-around;
        
        button {
            cursor: pointer;
            width: 70px;
            padding: 5px;
            border: none;
            border-bottom: 2px solid #fffcf2;
            background-color: transparent;
            transition: ease 0.5s;
            font-family: var(--font);
            :hover {
                border-bottom: 2px solid black;
            }
        }
    }

    @media (min-width:425px) and (max-width:768px) {
        height: 25%;
        display: flex;
        flex-direction: row;

        .titleHeader {
            p {
                text-align: center;
                font-size: 17px;
            }
        }

        div {

            button {
                font-size: 14px;
                //border: 1px solid red;
            }
        }
    } 
    @media(min-width:769px) and (max-width:1024px) {
        height: 20%;
        display: flex;
        flex-direction: row;

        .titleHeader {
            h1 {
                font-size: 38px;
            }
            p {
                
                font-size: 17px;
            }
        }

        div {

            button {
                font-size: 16px;
                //border: 1px solid red;
            }
        }
    }

    @media (min-width:1025px) and (max-width:1440px) {
        height: 15%;
        display: flex;
        flex-direction: row;

        .titleHeader {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-left: 20px;
            h1 {
                font-size: 38px;
            }
            p {
                
                font-size: 16px;
                margin-left: 35px;
            }
        }


        div {
            width: 30%;
            button {
                font-size: 16px;
                //border: 1px solid red;
            }
        }
    }

    @media(min-width:1441px) and (max-width:1920px) {
        height: 15%;
        display: flex;
        flex-direction: row;

        .titleHeader {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-left: 25px;
            h1 {
                font-size: 45px;
            }
            p {
                
                font-size: 18px;
                margin-left: 45px;
            }
        }


        div {
            width: 30%;
            button {
                font-size: 18px;
                //border: 1px solid red;
            }
        }
    }
`




export const Formulario = styled.div`
    flex: 1;
    
`
export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid;
    height: 60px;
    padding: 10px;
    align-items: center;
    font-family: var(--font);
    //margin-bottom: 20px;

    button {
        width: 80px;
        padding: 2px;
        color: black;
        font-size: 14px;
        border-radius: 5px;
        font-weight: bold;
        font-family: var(--font);
        cursor: pointer;
        border: 2px solid black;
        transition: ease 0.6s;
        :hover {
            background-color: black;
            border: 2px solid black;
            color: #fffcf2;
            transition: ease 0.6s;
        }
    }

`

export const ModalContent = styled.div`
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    p {
        font-family: var(--font);
        text-align: center;
        font-size: 13px;
    }

    .btn {
        text-decoration: none;
        width: 170px;
        margin: 0 auto;
        padding: 6px;
        color: black;
        font-size: 15px;
        border-radius: 6px;
        font-weight: bold;
        font-family: var(--font);
        cursor: pointer;
        border: 2px solid black;
        transition: ease 0.6s;
        :hover {
            background-color: black;
            border: 2px solid black;
            color: #fffcf2;
            transition: ease 0.6s;
        }
    }
    @media(min-width:769px) and (max-width:1024px) {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        p {
            
            text-align: justify;
            margin: 10px;
        }
        .btn {
            margin: 0px 0px 0px 10px;
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        p {
            //width: 550px;
            font-size: 18px;
            text-align: justify;
            margin: 10px;
        }
        .btn {
            margin: 0px 0px 0px 10px;
        }
    }

    @media(min-width:1441px) and (max-width:1920px) {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        p {
            
            font-size: 20px;
            text-align: justify;
            margin: 10px;
        }

        .btn {
            margin: 0px 0px 0px 10px;
        }
    }
    
`



export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    /* flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end; */
    height: 180px;
    padding: 10px;
    justify-content: space-around;
    //margin-top: 15px;
    //width: 100%;
    .div_input {
        label {
        display: flex;
        flex-direction: column;
        flex:1;
        abbr {
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-size: 17px;
        }

        p {
            color: black;
            font-weight: bold; 
            font-size: 17px;
        }

        input {
            width: 100%;
            padding: 7px;
            border-radius: 4px;
            outline: none;
            border: 2px solid black;
            font-size: 14px;
            font-weight: bold;
            margin-top: 6px;
            background-color: #fffcf2;
            ::placeholder {
                color: black;
            }
        }
    }
    
    }
    .div_selectbtn {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        p {
            color: black;
            font-weight: bold; 
            font-size: 17px;
        }

        select {
            margin-top: 6px;
            padding: 4px;
            border-radius: 4px;
            border: 2px solid black;
            outline: none;
            width: 110px;
            font-weight: bold;
            font-family: var(--font);
            option {
                color: black;
                font-weight: bold;
            }
        }

        button {
            padding: 7px;
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
    }
    
    @media (min-width:500px) and (max-width:768px) {
        display: flex;
        align-items: center;
        .div_input {
            width: 80%;
            
        }

        .div_selectbtn {
            width: 80%;
        }
    }

    @media(min-width:769px) and (max-width:1024px) {
        display: flex;
        flex-direction: row;
        height: 100%;
        .div_input {
            width: 55%;
            display: flex;
            align-items: flex-end;
        }
        .div_selectbtn {
            width: 32%;
            display: flex;
            align-items: flex-end;

            
        }
    }
   
    @media (min-width:1025px) and (max-width:1440px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;
        .div_input {
            width: 45%;
            display: flex;
            align-items: flex-end;
        }
        .div_selectbtn {
            width: 25%;
            display: flex;
            align-items: flex-end; 
            margin-left: 15px;
        }
    }

    @media(min-width:1441px) and (max-width:1920px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;
        .div_input {
            width: 40%;
            display: flex;
            align-items: flex-end;
        }
        .div_selectbtn {
            width: 17%;
            display: flex;
            align-items: flex-end; 
            margin-left: 15px;
        }
    }
`




// @media (min-width:425px) and (max-width:768px)
// @media(min-width:769px) and (max-width:1024px)
// @media (min-width:1025px) and (max-width:1440px)
// @media(min-width:1441px) and (max-width:1920px)