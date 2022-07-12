import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleComanda, listaComandas, setListaComandas, handleFecharComanda}) => {
    const [produtos, setProdutos] = useState("");
    const [mesa, setMesa] = useState("");
    const [numero, setNumero] = useState("");

    const geraID = () => Math.round(Math.random() * 1000);

    const handleCriarComanda = () => {
        if(!mesa || !numero) {
            alert("Informe a mesa e o número da comanda!")
            return
        } else if(mesa < 1) {
            alert("O valor deve ser positivo!")
            return
        }
        
        const comanda = {
            id: geraID(),
            mesa: mesa,
            numero: numero,
            produtos: produtos
        };

        handleComanda(comanda);

        setMesa("");
        setNumero("");
    };
    
    return (
        <>
        <C.Container>
            <C.InputContent>
                <C.Label>Mesa</C.Label>
                <C.Input 
                    value={mesa} 
                    onChange={(e) => setMesa(e.target.value)} 
                />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Número Comanda</C.Label>
                <C.Input 
                    value={numero} 
                    onChange={(e) => setNumero(e.target.value)} 
                />
            </C.InputContent>
            <C.Button onClick={handleCriarComanda}>Nova Comanda</C.Button>
        </C.Container>
        <Grid comandas={listaComandas} setListaComandas={setListaComandas} handleFecharComanda={handleFecharComanda} />
        </>
    );
}

export default Form;