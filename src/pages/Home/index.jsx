import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import * as C from "./styles";

const Home = () => {
    const navigate = useNavigate("");

    const handleLogout = () => {
        navigate("/")
    }

    return (
        <>
            <Header />
            <C.Container>
                <h1>Estou aqui</h1>
                <p>Eu comprei bebida</p>
            </C.Container>
            <C.Container>

                <C.Button onClick={handleLogout}>Logout</C.Button>
            </C.Container>
        </>
    )
}

export default Home;