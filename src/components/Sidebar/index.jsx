import React from "react";
import { Container, Content } from "./styles";
import { FaTimes } from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }

    const navigate = useNavigate();
    
    return (
    <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
            <SidebarItem 
                Text="Home" 
                toRoute="/home"
            />
            <SidebarItem 
                Text="Comandas"  
                toRoute="/comandas"
            />
            <SidebarItem 
                Text="Cardápio" 
                toRoute="/cardapio"
            />
        </Content>
    </Container>
    )
};

export default Sidebar;