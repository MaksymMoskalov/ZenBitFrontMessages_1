import styled from 'styled-components';

import leftRed from '../../img/footer/footerLeftRed.svg';
import rightYellow from '../../img/main/mainTopLeftFotRight.svg';
import leftGreen from '../../img/footer/footerRightGreen.svg';

export const FooterStyled = styled.footer`
  width: 1440px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;

  font-family: Apercu Arabic Pro;

  background-image: url(${leftRed}), url(${leftGreen}), url(${rightYellow});
  background-repeat: no-repeat;
  background-position: top -64px left 15px, top -1px left 1234px,
    top 51px left 1356px;
  background-size: 300px 300px, 78px 97px, 127px 127px;

  @media (max-width: 426px) {
    width: 425px;
    height: 100px;

    background-position: top 6px left 15px, top -1px left 316px,
      top 27px left 378px;
    background-size: 110px 110px, 39px 48px, 63px 63px;
  }

  @media (max-width: 376px) {
    width: 376px;
    height: 100px;
  }

  @media (max-width: 321px) {
    width: 320px;
    height: 100px;

    background-position: top 6px left 15px, top -1px left 270px,
      top 35px left 280px;
    background-size: 100px 100px, 34px 43px, 56px 56px;
  }
`;

export const LinksWrapper = styled.div`
  color: #696969;
  margin-left: 343px;
  margin-top: 79px;

  .svg {
    color: #696969;
    margin-right: 25px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #fad34f;
    }
  }
  .svg:not(:last-child) {
    margin-right: 25px;
  }

  @media (max-width: 426px) {
    margin-left: 130px;
    margin-top: 40px;
  }

  @media (max-width: 321px) {
    margin-left: 120px;
  }
`;
