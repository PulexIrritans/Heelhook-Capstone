import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-light-gray: rgb(248, 249, 250);
    --color-medium-gray: rgb(241, 243, 245);
    --border-color:rgb(69, 69, 69);
    --border-radius: 5px;
    --box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    max-width: 768px;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: var(--color-white);
    background-color: var(--color-black);
}

input, label, textarea{
    font-size: 1em;
}

ul {
  list-style: none;
  padding: 0;
  width: 95%;
}

.App {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;
