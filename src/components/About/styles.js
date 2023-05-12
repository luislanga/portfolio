import styled from "styled-components"

export const Container = styled.section`
    padding: 2.4rem 8rem;
    h2{
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    .about-container{
        display: flex;
        gap: 3.2rem;
        font-size: 1.5rem;
        padding: 2rem 0;
        margin: 0 120px;
    }

    .about-text{
        
        text-align: start;
        line-height: 2.3rem;
    }

    .about-pic{
        width: 50%;
    }

    @media (max-width: 1366px){
        .about-container{
            margin: 0 40px;
        }
    }

    @media (max-width: 854px){
        padding: 2.4rem 1.5rem;
        .about-container{
            margin: 0 10px;
        }
    }
`