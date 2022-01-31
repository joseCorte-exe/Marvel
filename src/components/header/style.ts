import styled from "styled-components";

export const HeaderView = styled.header`
    display: flex;

    align-items: center;
    justify-content: space-around;

    flex-direction: row;

    width: 100vw;
    height: 3.5em;

    background-color: #20212C;

    color: white;
    
    ul {
        display: flex;

        list-style: none;

        font-size: 11px;
        li {
            margin-inline: 1em;

            font-weight: 500;
        }
    }

    .icons {
        width: 12px;
    }

    section {
        display: flex;

        align-items: center;
        article {
            display: flex;
            justify-content: space-between;

            width: 2em;

            margin-right: 0.6em;
        }
        img {
            border-radius: 100%;
        }
    }
`;
