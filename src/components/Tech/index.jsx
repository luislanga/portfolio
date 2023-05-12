import { Container } from "./styles"
import stackData from "../../stack-data"

export function Tech(props){
    return(
        <Container>
            <img src={props.image}/>
            <span>{props.name}</span>
        </Container>
    )
}