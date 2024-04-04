import React from 'react';
import { FaLinkedinIn, FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FooterStyled, LinksWrapper } from './footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <LinksWrapper>
        <a href="/" className="svg">
          <FaLinkedinIn />
        </a>
        <a href="/" className="svg">
          <FaTwitter />
        </a>
        <a href="/" className="svg">
          <FaFacebookF />
        </a>
        <a href="/" className="svg">
          <FaPinterestP />
        </a>
      </LinksWrapper>
    </FooterStyled>
  );
};
