import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    
    &, &.dark-mode{
        --col-background:hsl(207, 26%, 17%);
        --col-text:hsl(0, 100%, 100%);
        --col-element: hsl(209, 23%, 22%);
        --col-hover:hsla(209, 22%, 28%, 1.00);
        --col-input:hsl(0, 0%, 50%);
    }

    &.light-mode{
         --col-background:hsl(0, 0%, 99%);
        --col-text:hsl(200, 15%, 8%);
        --col-element:hsl(0, 100%, 100%);
        --col-hover:hsla(0, 2%, 89%, 1.00);
        --col-input:hsl(0, 0%, 50%);

       

    }

    --bp-sm: 375px;
    --bp-lg: 1440px;

    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);


}

*,*::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Nunito Sans", sans-serif;
    min-height: 100vh;
    background-color: var(--col-background);
    color: var(--col-text);
}

a{
    text-decoration: none;
    color: var(--col-text);
}

ul{
    list-style: none;
}
`;

export default GlobalStyles;
