import React, { useState } from "react";
import Header from '../../components/Header';
import GridProducts from './GridProducts';
import Input from './Input';

const Cardapio = () => {
    const produtos = localStorage.getItem("produto");

    const [listaProdutos, setListaProdutos] = useState(produtos ? JSON.parse(produtos) : []);

    const handleProduto = (produto) => {
        const novaListaProdutos = [...listaProdutos, produto];

        setListaProdutos(novaListaProdutos)

        localStorage.setItem("produto", JSON.stringify(novaListaProdutos));
    }

    return (
        <>
            <Header />
            <Input 
                handleProduto={handleProduto} 
                listaProdutos={listaProdutos} 
                setListaProdutos={setListaProdutos} 
            />
            <GridProducts listaProdutos={listaProdutos}></GridProducts>
        </>
    )
}

export default Cardapio;