import React from 'react';
import { ContainerLinkStyled, StyledLink } from './LinkStyled';

const Link = ({ to = '/' }) => {
  return (
    <ContainerLinkStyled>
      <StyledLink to={to}>

      </StyledLink>
    </ContainerLinkStyled>
  );
};

export default Link;