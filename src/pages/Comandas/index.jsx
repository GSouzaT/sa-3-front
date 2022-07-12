import React, { useState } from 'react';
import Header from '../../components/Header';
import Form from './Form/index'


const Comandas = () => {
    const comandasAbertas = localStorage.getItem("comanda");
    const comandasFechadas = localStorage.getItem("comandaFechada");

    const [listaComandas, setListaComandas] = useState(
        comandasAbertas ? JSON.parse(comandasAbertas) : []
    );
    const [listaFechadas, setListaFechadas] = useState(
        comandasFechadas ? JSON.parse(comandasFechadas) : []
    );  

    const handleComanda = (comanda) => {
        const novaListaComandas = [...listaComandas, comanda];

        setListaComandas(novaListaComandas)

        localStorage.setItem("comanda", JSON.stringify(novaListaComandas));
    }

    const handleFecharComanda = (comanda) => {
        const novaListaFechadas = [...listaFechadas, comanda]
        
        setListaFechadas(novaListaFechadas)
        
        localStorage.setItem("comandaFechada", JSON.stringify(novaListaFechadas))
    }

    return (
        <>
            <Header />
            <Form 
                handleComanda={handleComanda}
                listaComandas={listaComandas}
                setListaComandas={setListaComandas}
                handleFecharComanda={handleFecharComanda}
            />
        </>
    );
}

export default Comandas;