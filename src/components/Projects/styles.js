import styled from "styled-components"

export const Container = styled.div`

    background-color: var(--bg-secondary);
    padding: 2.4rem 8rem;
    h2{
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    >div{
        margin: 0 120px;
    }

    @media (max-width: 1366px){
        >div{
            margin: 0 40px;
        }

    }

    @media (max-width: 854px){
        padding: 2.4rem 1.5rem;
        >div{
            margin: 0 15px;
        }
    }
`