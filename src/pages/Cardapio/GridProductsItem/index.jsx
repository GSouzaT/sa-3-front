import React from "react";
import * as C from "./styles";

const GridProductsItem = ({ produto }) => {
    
    return (
        <C.Tr>
            <C.Td alignCenter>{produto.nome}</C.Td>
            <C.Td alignCenter>{produto.descricao}</C.Td>
            <C.Td alignCenter>{produto.preco}</C.Td>
            <C.Td alignCenter>{produto.teorAlcoolico}</C.Td>
        </C.Tr>
    );
};

export default GridProductsItem;