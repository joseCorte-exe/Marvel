import styled from 'styled-components';

export const CardView = styled.div`

    display: flex;
    flex-direction: column;

    /* min-width: 110px; */
    max-width: 165px;

    p {
        margin: 0px 0px;
        
        font-weight: 1000;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        line-height: 17px;
    }

    div {
        height: 2.8em;
        overflow: hidden;

        span {
            font-weight: 500;
            font-size: 10px;
        }
    }


    #type {
        width: 6em;
        position: relative;

        top: 2em;

        background-color: red;

        font-weight: 700 !important;
        font-size: 11px;
        
        z-index: 1;

        color: white;

        padding-left: 2px;
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