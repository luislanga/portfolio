import styled from "styled-components"

export const Container = styled.div`
        padding: 2.4rem 8rem;
    h2{
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    >div{
        margin: 0 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        span{
            line-height: 30px;
        }
        img{
            margin-top: -2px;
            height: 24px;
        }
    }
    
    @media (max-width: 854px){
            padding: 2.4rem 1.5rem;
        }


`