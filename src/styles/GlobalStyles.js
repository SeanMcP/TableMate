import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background: ${p => p.theme.background};
        color: ${p => p.theme.text};
        font-size: 16px;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: ${p => p.theme.accentDark};
    }

`;
