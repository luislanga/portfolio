import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }
    
    &:focus{
        outline: none;
    }
    

    :root{
        font-size: 62.5%;

        //Font families
        --ff-main: "Poppins";
        --ff-secondary: "Roboto";

        --bg-main: ${({theme}) => theme.COLORS.INDIGO};
        --bg-secondary: ${({theme}) => theme.COLORS.PURPLEHAZE};
        --bg-tertiary: ${({theme}) => theme.COLORS.FUCHSIA};
        --bg-quaternary: ${({theme}) => theme.COLORS.ROSERED};
        --bg-accent: ${({theme}) => theme.COLORS.CHAMPAGNE};
        --bg-subtitle: ${({theme}) => theme.COLORS.CREAM};
    }
`
