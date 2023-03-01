import { Link,useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Formulario,
  ModalHeader,
  ModalContent,
  FormContainer
} from "./styles";
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useImage } from "../../Providers/PostImage";
import { CardImage } from "../../Components/CardImage";
import { ImageNo } from "../../Components/ImageNo";


export const Home = () => {

  const {PostImage, image, setImageFavoritas} = useImage()

  const schemaImage = yup.object().shape({
    prompt: yup.string().required("Campo Obrigatório"),
    n: yup.number()
  });

  let nomeUser = localStorage.getItem("userName");
  const navigation = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaImage),
  });

  const handleLogout = () => {
    localStorage.clear();
    navigation("/");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageSubmit = (data) => {
    PostImage(data)
  };
  

  const styleModal = {
    content: {
      width: "80%",
      heigth: "60%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      padding: "0",
      background: "#fffcf2",
    },
  };


  return (
    <Container>
      <Header>
        <div className="titleHeader">
          <h1>Logo</h1>
          <p>Seja bem-vindo(a) {nomeUser}</p>
        </div>
        <div>
          <button onClick={() => {
            navigation("/favoritas")
          }}>Favoritas</button>
          <button onClick={openModal}>Sobre</button>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </Header>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        style={styleModal}
      >
        <ModalHeader>
          <h2>Informações</h2>
          <button onClick={closeModal}>Fechar</button>
        </ModalHeader>
        <ModalContent>
          <p>
          OpenAI é um laboratório estadunidense de pesquisas em inteligência artificial (IA) sendo subsidiária e constituída pela empresa com fins lucrativos OpenAI LP e a empresa matriz sem fins lucrativos OpenAI Inc. A empresa conduz pesquisas no campo de inteligência artificial (IA) e tem como objetivo promover e desenvolver IA amigável, de tal forma a beneficiar a humanidade como um todo. A organização foi fundada em São Francisco no final de 2015 por Elon Musk, Sam Altman, Peter Thiel, Reid Hoffman, Jessica Livingston e outros, que coletivamente prometeram US$ 1 bilhão.
          </p>
          <Link className="btn" to="https://openai.com/" target="_blank">
            Link Documentação
          </Link>
        </ModalContent>
      </Modal>




     {image.data === undefined ? 
      <ImageNo title="Para gerar sua Imagem bastar digitar as características da imagem e a quantidade e apertar o botão gerar imagem." description="Dica: quanto mais específico você for melhor será a imagem."/>
     :
      <CardImage dadosImage={image.data} funFav_Del={setImageFavoritas} msgBtn="Favoritar"/>
     }
     


      <Formulario>
        <FormContainer onSubmit={handleSubmit(handleImageSubmit)}>
          <div className="div_input">
            <label>
              <p>Descreva a Imagem</p>
              <span>{errors.prompt && errors.prompt?.message}</span>
              <input placeholder="Descrição da Imagem" {...register("prompt")}  />
            </label>
          </div>

          <div className="div_selectbtn">
            <label>
              <p>Qtd de Imagens</p>
              <select {...register("n")} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>

            <button type="submit">Gerar Imagem</button>
          </div>
        </FormContainer>
      </Formulario>
    </Container>
  );
};
