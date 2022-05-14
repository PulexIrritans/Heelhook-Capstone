import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-light-gray: rgb(248, 249, 250);
    --color-medium-gray: rgb(241, 243, 245);
    --color-cyan: rgb(16, 152, 173);
    --color-dark-gray: rgb(46, 45, 45);
    --border-color:rgb(16, 152, 173);
    --border-radius: 5px;
    --box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, 
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--color-dark-gray)
}

h1, p {
  margin: 0;
}

h2 {
  font-size: 1rem;
}

body {
    max-width: 768px;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: var(--color-white);
    background-color: var(--color-black);
}

.App {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

input, label, textarea {
    font-size: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
`;
