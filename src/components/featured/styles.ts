import styled, { StyleSheetManagerProps } from 'styled-components'

export const FeaturedWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 280px;
  box-sizing: border-box;
  box-shadow: 0 0 21px 9px rgba(0,0,0,.12);
  z-index: 99;
  margin: 60px 0; 

  @media (min-width: 720px) {
    width: 320px;
    height: 500px;
  }

  h3 {
    position: absolute;
    font-size: 60px;
    top: -50px;
    opacity: .6;
    z-index: 98;

    @media (min-width: 720px) {
      top: 90px;
      font-size: 90px;
    }
  }

  .featured-image {
    position: relative;

    &__text {
      font-size: 21px;
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      top: 50%;
      color: var(--color-white);
    }
  }
  
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.2);
    z-index: 99;
    filter: blur(60px);
  }

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    z-index: 99;
    
    @media (min-width: 720px) {
      width: 270px;
      height: 450px;
    }
  }
`