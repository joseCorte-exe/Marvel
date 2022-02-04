import styled from "styled-components";

export const DetailsView = styled.div`
    display: flex;

    max-width: 100%;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin-bottom: 7em;

    #header {
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 0px 0px 0px;


        div {
            display: flex;

            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 100vw;
    
            padding-top: 3em ;
    
            background: rgba( 0, 0, 0, 0.5 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 2.5px );
            -webkit-backdrop-filter: blur( 2.5px );
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }

    }

    #cardContainer {
        display: flex;

        flex-wrap: wrap;

        column-gap: 1em;
    }


    main {
        display: flex;

        flex-wrap: wrap;

        padding-inline: 10em;

        span {
            font-size: 0.8em;
        }

        section {
            &:first-child {
                display: flex;

                flex-direction: row;
                justify-content: center;
                align-items: center;

                gap: 1em;
            }
            article {
                margin-top: 3em;
            }
            
        }
    }

    

`;
