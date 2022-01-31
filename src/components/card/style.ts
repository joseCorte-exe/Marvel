import styled from 'styled-components';

export const CardView = styled.div`

    display: flex;
    flex-direction: column;

    width: 110px;

    p {
        margin: 0px 0px;
        
        font-weight: 1000;
        font-size: 8px;
        font-family: 'Roboto', sans-serif;
        line-height: 17px;
    }

    span {
        font-weight: 500;
        font-size: 8px;
    }

    #type {
        width: 6em;
        position: relative;

        top: 2em;

        background-color: red;

        font-weight: 700 !important;
        font-size: 11px;
        
        z-index: 1;
    }

    footer {
        /* background-color: #C4C4C4; */
        margin: 0px 0px;
        line-height: 12px;

    }

    img {
        border: 0;
        margin: 0px 0px;
    }
`;