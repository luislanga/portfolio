import styled from "styled-components"

export const Container = styled.section`
        font-family: var(--ff-main);
        font-size: 1.6rem;

        height: 100vh;
        
        .title-content{
                background: radial-gradient(
                        rgba(255, 255, 255, 0.2) 5%,
                        transparent 8%
                );
                background-position: 0 4.2%;
                background-size: 3.5vmin 3.5vmin;
                transition: background-position  ease;
                height: 100vh;
                padding: 12rem;

        }
        
        .title-content:hover{
                background-position: ${({mousePosition}) => mousePosition.left/266}% ${({mousePosition}) => mousePosition.top/150}%;
        }
        
        .main-text{     
                padding: 4.8rem;
                display: flex;
                height: 100%;
                width: 100%;
                justify-content: center;
                flex-direction: column;

                span{
                        margin-top: -3rem;
                        margin-bottom: .8rem;
                        margin-left: 5rem;
                        font-size: 1.2rem;
                        color: var(--bg-subtitle)
                }        
        
                h1{
                        margin: 0 10rem;
                        font-size:4.8rem;
                        color: var(--bg-quaternary);
                        font-weight: 500
                }

                h2{
                        margin: -1.8rem 10.2rem;
                        font-weight: 400;
                        font-size: 1.8rem;
                        color: var(--bg-tertiary)
                }
        }

        .links{
                display: flex;
                align-items: center;
                margin-top: 1.4rem;
                padding-left: 9.8rem;
                gap: .2rem;
                img{
                        height:3rem;   
                }
        }
        
        @media (max-width: 968px){


        
                .title-content{
                        padding: 0;
                        

                }

                .main-text{
                        padding: 0;
                        width: 258px;
                        margin: 0 auto;

                        h1{
                                margin: 0;
                        }

                        h2{
                                margin: -1.8rem 0.2rem;
                        }
                }
      
                .links{
                        margin-left: -0.2rem;
                        padding-left: 0rem;
                }
        }
        
`