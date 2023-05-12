import { Container } from "./styles"
import { Tech } from "../Tech"
import stackData from "../../stack-data"


export function Stack(){

    return(
        <Container>
            <h2>habilidades</h2>
            <div className="techs-box">
                {stackData.techs.map((tech, index) => {
                    return(<Tech key={index} name={tech.name} image={tech.image} />)
                })}
            </div>
        </Container>
    )
}
