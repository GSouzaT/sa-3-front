import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as C from "./styles"

const Login = () => {
    const userMock = { nome: "joao", senha: "123" }
    const [user, setUser] = useState({
        nome: "",
        senha: ""
    });

    const navigate = useNavigate();

    const login = ({ nome, senha }, user) => {
        const { nomeUser, senhaUser } = user
        if (nome === nomeUser || senha === senhaUser) return false

        alert("Usuário ou senha incorreto(s)!")
        return true
    }


    const handleLogin = () => {
        if (!login(user, userMock)) return

        setUser({
            nome: "",
            senha: ""
        })

        navigate('/home')
    }

    return (
        <C.Container>
            <C.Title>Login</C.Title>
            <C.InputContent>
                <C.Label>Usuário</C.Label>
                <C.Input
                    value={user.nome}
                    onChange={(e) => setUser((prevState) => ({...prevState, nome: e.target.value, }))}
                />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Senha</C.Label>
                <C.Input
                    value={user.senha}
                    onChange={(e) => setUser((prevState) => ({...prevState, senha: e.target.value, }))}
                />
            </C.InputContent>
            <C.Button onClick={handleLogin}>Logar</C.Button>
        </C.Container>
    )
}

export default Login;