import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ comandas, setListaComandas, handleFecharComanda }) => {
    const onClose = (ID) => {
        const novaListaComandas = comandas.filter(comanda => comanda.id !== ID );
        setListaComandas(novaListaComandas);
        localStorage.setItem("comanda", JSON.stringify(novaListaComandas))

        const comandaFechada = comandas.find( comanda => comanda.id === ID)
        handleFecharComanda(comandaFechada)
    }
    
    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={20} alignCenter>ID comanda</C.Th>
                    <C.Th width={20} alignCenter>Mesa</C.Th>
                    <C.Th width={20} alignCenter>Número comanda</C.Th>
                    <C.Th width={20} alignCenter>Fechar comanda</C.Th>
                    {/* <C.Th width={20} alignCenter>
                        <C.Button >Adicionar </C.Button>
                    </C.Th> */}
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {comandas?.map((comanda, index) => (
                    <GridItem key={index} comanda={comanda} onClose={onClose} />
                ))}
            </C.Tbody>
        </C.Table>
    )
}

export default Grid;