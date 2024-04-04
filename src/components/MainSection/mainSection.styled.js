import styled from 'styled-components';

import cloud from '../../img/main/cloud.svg';
import map from '../../img/main/mainMap.png';
import topLeft from '../../img/main/mainTopLeftFotRight.svg';
import topBlur from '../../img/main/mainTopBlur.svg';
import midYellow from '../../img/main/mainCenterYellow.svg';
import midRed from '../../img/main/mainCenterRed.svg';

export const MainStyled = styled.section`
  width: 1293px;
  height: 749px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 179px;
  padding-left: 147px;

  font-family: Apercu Arabic Pro;

  background-image: url(${cloud}), url(${cloud}), url(${midYellow}),
    url(${midRed}), url(${map}), url(${cloud}), url(${topLeft}), url(${topBlur});
  background-repeat: no-repeat;
  background-position: top 400px left -92px, top 626px left 343px,
    top 516px left 767px, top 558px left 762px, top 0 left 818px,
    top 101px left 775px, top 23px left 29px, top 21px left 714px;
  background-size: 218px 164px, 218px 164px, 127px 127px, 295px 295px,
    622px 922px, 218px 164px, 127px 127px, 87px 87px;

  @media (max-width: 426px) {
    width: 385px;
    height: 667px;
    padding-top: 89px;
    padding-left: 40px;

    background-position: top 550px left -46px, top 313px left 274px,
      top 507px left 265px, top 532px left 253px, top 0 left 226px,
      top 101px left 775px, top 23px left 29px, top 21px left 714px;
    background-size: 109px 82px, 109px 82px, 63px 63px, 148px 148px, 200px 275px,
      218px 164px, 63px 63px, 87px 87px;
  }

  @media (max-width: 376px) {
    width: 335px;
    height: 667px;
    padding-top: 89px;
    padding-left: 40px;
  }

  @media (max-width: 321px) {
    width: 280px;
    height: 667px;
    padding-top: 89px;
    padding-left: 38px;

    background-position: top 550px left -46px, top 313px left 274px,
      top 535px left 224px, top 555px left 216px, top 0 left 226px,
      top 101px left 775px, top 23px left 29px, top 21px left 714px;
    background-size: 109px 82px, 109px 82px, 63px 63px, 148px 148px, 200px 275px,
      218px 164px, 63px 63px, 87px 87px;
  }
`;
