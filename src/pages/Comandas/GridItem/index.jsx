import React from "react";
import * as C from "./styles";
import { FaTimes } from "react-icons/fa";

const GridItem = ({ comanda, onClose }) => {
    
    return (
        <C.Tr>
            <C.Td alignCenter>{comanda.id}</C.Td>
            <C.Td alignCenter>{comanda.mesa}</C.Td>
            <C.Td alignCenter>{comanda.numero}</C.Td>
            <C.Td alignCenter>
                <FaTimes onClick={() => onClose(comanda.id)} />
            </C.Td>
        </C.Tr>
    );
};

export default GridItem;