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
`;

// background-position: top 400px left -92px, top 626px left 343px,
//     top 516px left 763px;
//   background-size: 214px 208px, 88px 86px, 78px 97px;
