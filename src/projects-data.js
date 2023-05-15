import foodexplorer from "../src/assets/foodexp.jpeg"
import formalizador from "../src/assets/formalizador.jpeg"

export default {


    projects: [
        {
            title: `Food Explorer`,
            description: `Projeto final do programa Explorer da Rocketseat com o tema "cardápio digital". Consome uma API REST que permite cadastrar, ler, alterar e deletar usuários, pratos, pedidos e favoritos. Avaliado com nota 4.68 de 5 e recordista em tempo de entrega! Credenciais admin > login: admin@admin.com / senha: admin`,
            links: [
                {
                    title: "Ir ao site",
                    link: "https://foodexp.netlify.app/"
                },
                {
                    title: "Repositório front-end",
                    link: "https://github.com/luislanga/food_explorer"
                },
                {
                    title: "Repositório back-end",
                    link: "https://github.com/luislanga/food_explorer_backend"
                },
            ],
            tags: [
                "React.js", "styled-components", "Node.js", "Express", "SQLite", "API"
            ],
            image: foodexplorer
        },
        {
            title: `Formalizador do Futuro`,
            description: `Aplicação que utiliza a API da openai com o modelo GPT-3.5 para formalizar textos. Limitado a 100 tokens.`,
            links: [
                {
                    title: "Ir ao site",
                    link: "https://formalizadordofuturo.netlify.app/"
                },
                {
                    title: "Repositório front-end",
                    link: "https://github.com/luislanga/terminator_front"
                },
                {
                    title: "Repositório back-end",
                    link: "https://github.com/luislanga/formalizator_api"
                },
            ],
            tags: [
                "React.js", "styled-components", "Node.js", "Express", "IA", "API"
            ],
            image: formalizador
        }
    ]
}