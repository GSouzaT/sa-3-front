import React, { useState } from "react";
import * as C from "./styles";

const Input = ({ handleProduto }) => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [teorAlcoolico, setTeorAlcoolico] = useState("");
    const [isBebida, setIsBebida] = useState(false);

    const geraID = () => Math.round(Math.random() * 1000);

    const handleCriarProduto = () => {
        if(!nome || !preco) {
            alert("Informe o nome e o preço!")
            return
        }
        
        const produto = {
            id: geraID(),
            nome: nome,
            descricao: descricao,
            preco: preco,
            isBebida: isBebida,
            teorAlcoolico: teorAlcoolico
        };

        handleProduto(produto);

        setNome("");
        setDescricao("");
        setPreco("");
        setTeorAlcoolico("");
    };
    
    return (
        <>
        <C.Container>
            <C.InputContent>
                <C.Label>Nome</C.Label>
                <C.Input 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input 
                    value={descricao} 
                    onChange={(e) => setDescricao(e.target.value)} 
                />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Preço</C.Label>
                <C.Input 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} 
                />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Teor Alcoólico</C.Label>
                <C.Input 
                    value={teorAlcoolico} 
                    onChange={(e) => setTeorAlcoolico(e.target.value)} 
                />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input 
                    type="radio" 
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={(e) => setIsBebida(!isBebida)} 
                />
                <C.Label htmlFor="rIncome">Prato</C.Label>
                <C.Input 
                    type="radio" 
                    id="rExpense"
                    name="group1"
                    onChange={(e) => setIsBebida(!isBebida)} 
                />
                <C.Label htmlFor="rExpense">Bebida</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleCriarProduto}>Novo Item</C.Button>
        </C.Container>
        </>
    );
}

export default Input;