import React from "react";
import GridProductsItem from "../GridProductsItem";
import * as C from "./styles";

const GridProducts = ({ listaProdutos }) => {
    const prato = (produto) =>{
        return !produto.isBebida
    }

    const bebida = (produto) =>{
        return produto.isBebida
    }

    return (
        <>
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={20} alignCenter>Nome</C.Th>
                    <C.Th width={30} alignCenter>Descrição</C.Th>
                    <C.Th width={20} alignCenter>Preço</C.Th>
                    <C.Th width={10} alignCenter>Teor Alcoólico</C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {listaProdutos?.filter(prato).map((produto, index) => (
                    <GridProductsItem key={index} produto={produto} />
                ))}
            </C.Tbody>
        </C.Table>
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={20} alignCenter>Nome</C.Th>
                    <C.Th width={30} alignCenter>Descrição</C.Th>
                    <C.Th width={20} alignCenter>Preço</C.Th>
                    <C.Th width={10} alignCenter>Teor Alcoólico</C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {listaProdutos?.filter(bebida).map((produto, index) => (
                    <GridProductsItem key={index} produto={produto} />
                ))}
            </C.Tbody>
        </C.Table>
        </>
    )
}

export default GridProducts;