import styled from "styled-components";

export const HeaderView = styled.header`
    /* position: absolute; */
    display: flex;

    align-items: center;
    justify-content: space-around;

    flex-direction: row;

    width: 100%;
    /* max-width: 100vw; */

    height: 5em;

    background-color: #20212C;

    color: white;
    
    ul {
        display: flex;

        list-style: none;

        font-size: 16px;
        a {
            margin-inline: 1em;

            font-weight: 500;

            text-decoration: none;
            color: white;
        }
    }

    .icons {
        /* width: ; */
    }

    section {
        display: flex;

        align-items: center;
        article {
            display: flex;
            justify-content: space-between;

            width: 2.8em;

            margin-right: 0.6em;
        }
        img {
            border-radius: 100%;
        }
    }
`;
