import styled from "styled-components";

export const Container = styled.div`
    margin: 70px auto;
    width: 320px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #2e2e1f;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 20px;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const Title = styled.h3`
`;

export const InputContent = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    height: 25px;
    outiline: none;
    border-radius: 5px;
    padding: 5px 0px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    height: 30px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    font-weight: bold;
    background-color: #e6b800;
`;