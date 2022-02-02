import styled from "styled-components";

export const DetailsView = styled.main`
    display: flex;

    max-width: 100%;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    #header {
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            display: flex;

            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 98.9vw;
    
            padding-top: 3em;
    
            background: rgba( 0, 0, 0, 0.5 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 2.5px );
            -webkit-backdrop-filter: blur( 2.5px );
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }

    }

    main {
        display: grid;

        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;

        padding-inline: 10em;

        grid-gap: 4em;

        span {
            font-size: 0.8em;
        }

        section {
            article {
                margin-top: 3em;
            }
        }
    }

`;