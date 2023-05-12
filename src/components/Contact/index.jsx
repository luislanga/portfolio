import { Container } from "./styles"
import mail from "../../assets/mail.svg"

export function Contact(){
    return(
        <Container>
            <h2>contato</h2>
            <div>
                <img src={mail} alt="" />
                <span>luis.langajr96@gmail.com</span>
            </div>

        </Container>
    )
}