import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 13rem;
    width: 14.3rem;
    padding: 2px;
    margin-top: 1rem;
    font-size: 1.4rem;
    
    img{
        height: 8rem;
        width: 8rem;
    }

    @media (max-width: 1034px){
        height: 10rem;
        width: 11.3rem;
        font-size: 1rem;
        img{
            height: 6rem;
            width: 6rem;
        }
    }

    @media (max-width: 854px){
        height: 9rem;
        width: 9rem;
        font-size: 0.85rem;
        img{
            height: 6rem;
            width: 6rem;
        }
    }

`