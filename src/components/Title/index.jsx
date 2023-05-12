import { Container } from "./styles"
import { useState } from 'react'
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"

export function Title(){

    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })
    function handleMouseMove(ev) { 
        setMousePosition(
            {
                left: ev.pageX, 
                top: ev.pageY
            }
        ) 
    }

    return(
        <Container mousePosition={mousePosition}>
            <div 
                onMouseMove={(ev)=> handleMouseMove(ev)} 
                className="title-content"
                >
                <div className="main-text">
                    <h1>Luis Langa</h1>
                    <h2>full stack developer</h2>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/luis-langa-59b861230/" target="blank">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/luislanga" target="blank">
                            <img src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}