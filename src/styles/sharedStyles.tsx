import styled, { css } from 'styled-components';

export const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
export const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
export const headingAccentStyles = {
  color: "#663399",
}
export const paragraphStyles = {
  marginBottom: 48,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

export const NavTitles = styled.a`
  color: "#8954A8";
  font-weight: "bold";
  font-size: 16;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-family: 'DM Sans', sans-serif;
  text-decoration: none !important;
  display: block;
  text-align: center;
  padding: 10px 24px;
`;

export const NavLinksDiv = styled.div`
  display: flex;
  font-size: 80%;
  padding: 1rem 1rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  padding: 2rem 1rem;
  text-align: left;
  color: #BF4F74;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-family: 'DM Sans', sans-serif;
`;

export const NavButton = styled.button<{ $theme?: string; }>`
/* Adapt the colors based on primary prop */
${props => { switch (props.$theme) { 
  case 'vampire':
    return css`
      outline-color: darkorange;
    `
  case 'light':
    return css`
      outline: papayawhip;
    `
  }
}
};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
outline-color: darkorange;
`;