import styled from 'styled-components'

export const PictureDetailWrapper = styled.article`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    min-width: 230px;
    width: 80%;
    height: 70vh;

    @media (min-width: 720px) {
        width: 60%;
        max-width: 630px;        
        height: 500px;

        .picture-detail {
            &__title {
                font-size: 21px;
            }
            &__data {
                font-size: 21px;
            }
        }
    }

    .picture-detail {
        &__title {
            text-align: start;

        }

        &__picture {
            position: relative;
            width: 100%;
            height: auto;
            overflow: hidden;
            margin: .6rem 0 .6rem 0;
            box-shadow: 0 0 21px 9px rgba(0,0,0,.2);

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__data {
            align-self: flex-end;
            display: flex;
            flex-flow: column nowrap;
            place-items: flex-end;
            text-align: end;
        }
    }
`