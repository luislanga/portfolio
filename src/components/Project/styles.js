import styled from "styled-components"

export const Container = styled.div`
    
    display: flex;
    gap: 72px;    
    padding: 36px 0px;
    justify-content: space-between;

    & + &{
        border-top: 1px solid rgba(255,255,255,0.3);
    }


    h3{
        font-size: 20px;
        font-weight: 500;
    }

    >div{
        display: flex;
        flex-direction: column;
        gap: 35px;
        justify-content: space-between;
    }
    
    .imgContainer{
        width: 30%;
        display: flex;
        justify-content: center;
        img{
            border-radius: 18px;
        }
    }
    
    @media (max-width: 1130px){
        flex-direction: column;
        
        gap: 35px;
        .imgContainer{
            width: 100%;
            display: flex;

            img{
                border-radius: 18px;
                max-width: 100%;
                align-self: center;      
            }
        }

    }

`

export const Links = styled.div`
    display: flex;
    gap: 16px;

    
    a{
        color: white;
        cursor: pointer;
        background-color: black;
        padding: 10px 16px;;
        border-radius: 15px;
    
    }

    a:hover{
        background-color: var(--bg-main);
    }

    @media(max-width: 666px){
        flex-direction: column;
        a{
            width: fit-content;
        }
    }

`

export const Tags = styled.div`
    ul{


        margin-top: -25px;
        list-style: none;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    li{

        font-size: 12px;
        padding: 5px 8px;
        border: 1px solid white;
        border-radius: 12px;
    }

    @media(max-width: 666px){
        ul{
            gap: 8px;
        }
    }

`
