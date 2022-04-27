import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-light-gray: rgb(248, 249, 250);
    --color-medium-gray: rgb(241, 243, 245);
    --border-color:rgb(69, 69, 69);
    --border-radius: 5px;
  }

*{
    box-sizing: border-box;
}

body{
    max-width: 768px;
    margin: 0 auto;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: var(--color-white);
    background-color: var(--color-black);
}

input, label, textarea{
    font-size: 1em;
}
`;
