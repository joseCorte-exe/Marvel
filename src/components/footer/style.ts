import styled from "styled-components";

export const FooterView = styled.footer`
    background-color: #20212C;
    color: white;

    height: 13em;

    header {
        display: flex;
        padding-inline: 10em;

        gap: 2em;

        font-size: 16px;


        ul {

        list-style: none;

        a {
            text-decoration: none;

            color: white !important
        }
    }
    }

    hr {
        height: 0.2px;
        border-top-color: black;
        border-bottom-color: transparent;
        width: 90%;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-around;

        font-size: 14px;

        color: #bbc;
    }
`;
