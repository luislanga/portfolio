import { Container, Tags, Links } from "./styles";

export function Project({ title, description, links, tags, image }) {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Tags>
          <ul>
            {tags &&
              tags.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
          </ul>
        </Tags>
        <Links>
          {links &&
            links.map((link, index) => {
              return (
                <a key={index} href={link.link} target="blank">
                  {link.title}
                </a>
              );
            })}
        </Links>
      </div>
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
    </Container>
  );
}
