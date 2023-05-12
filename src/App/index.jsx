import { Container } from "./styles"
import { Title } from "../components/Title"
import { Stack } from "../components/Stack"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"

export function App() {

  return (
    <Container>
      <Title />
      <Stack />
      <About />
      <Projects />
      <Contact />
    </Container>
  )
}

