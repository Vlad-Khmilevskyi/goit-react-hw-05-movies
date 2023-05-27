import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  letter-spacing: 0.02em;
  font-size: 14px;
  line-height: 1.85;
  overflow-x: hidden;
  margin: 0 auto;
  transition: 1.5s;

}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${'' /* min-height: 100vh; */}
}

body::-webkit-scrollbar {
  appearance: none;
  background: #000;
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}
section {
  margin-top: 50px;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center center;
}

ul {
  list-style: none;
}

`;