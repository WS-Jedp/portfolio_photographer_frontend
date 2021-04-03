import styled, { StyleSheetManagerProps } from 'styled-components'

interface PictureDetailProps extends StyleSheetManagerProps {
    detailed: boolean;
}

export const PictureDetailWrapper = styled.article`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    min-width: 230px;
    width: 80%;
    height: ${(props:PictureDetailProps) => props.detailed === true ? '40vh' : '70vh'};
    transition: .3s ease-in-out;

    @media (min-width: 720px) {
        width: 60%;
        max-width: ${(props:PictureDetailProps) => props.detailed === true ? '60vh' : '630px'};
        height: ${(props:PictureDetailProps) => props.detailed === true ? '60vh' : '500px'};

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