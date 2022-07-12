import React, { useState } from "react";
import { Container, Title } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Container align-center>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
            {<Title>Restaurante Ornitorrinco</Title>}
        </Container>
    )
}

export default Header;