import styled from 'styled-components';

export const ComicsView = styled.main`
    padding: 5em;

    h3 {
        /* border-bottom: 1px; */
        border-bottom-color: red;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    section {
        display: flex;
        
        flex-wrap: wrap;
        
        justify-content: space-evenly;
    }
`;
