import styled from "styled-components"

export const Container = styled.section`
    background-color: var(--bg-quaternary);
    
    padding: 2.4rem 8rem;
    h2{
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    .techs-box{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 0.8rem
    }
    
    @media (max-width: 854px){
        padding: 2.4rem 1.5rem;
    }

`