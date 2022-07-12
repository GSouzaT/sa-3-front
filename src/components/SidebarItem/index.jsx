import React from "react";
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';

const SidebarItem = ({ Text, toRoute }) => {
    const navigate = useNavigate();
    const rota = toRoute

    return (
        <Container onClick={() => { navigate(rota)}}>
            {Text}
        </Container>
    )
};

export default SidebarItem;