import styled from "styled-components";

export const Container =  styled.div`
    height: 60px;
    display: flex;
    backgorund-color: #1A202C;
    box-shadow: 0 0 20px 3px;
    
    svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 15px;
        margin-left:32px;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    color: white;
    margin-top: 10px;
    margin-left: 500px
`;