import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Container, Apresentation, FormDiv,  Form} from "./styles"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigation = useNavigate();

    const loginSchema = yup.object().shape({
        nome: yup.string().required("Nome Obrigatório"),
        email: yup.string().email('Email Inválido').required("Email Obrigatóro"),
        password: yup.string().required('Senha Obrigatória').min(8,'Minimo 8 Caracteres')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onLoginForm = (data) => {
        localStorage.setItem('userName', data.nome)
        navigation('/home')
    }

    return (
        <Container>
            <Apresentation>
                <h1>Bem-Vindo ao gerador de Imagem</h1>
                <p>para começar a gerar suas imagems basta fazer o login</p>
            </Apresentation>
            <FormDiv>
                <Form onSubmit={handleSubmit(onLoginForm)}>
                    <label>
                        Nome {errors.nome && <p>{errors.nome?.message}</p>}
                        <input placeholder="Nome" {...register('nome')}/>
                    </label>
                    <label>
                        Email {errors.email && <p>{errors.email?.message}</p>}
                        <input placeholder="Email" {...register('email')}/>
                    </label>
                    <label>
                       <p>Senha { errors.password && errors.password?.message}</p>
                        <input placeholder="Senha" type="password" {...register('password')}/>
                    </label>
                    
                    <button type="submit">Fazer Login</button>
                    
                </Form>

            </FormDiv>
        </Container>
    )
}