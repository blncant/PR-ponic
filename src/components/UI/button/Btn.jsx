import React from 'react'
import { StyledButton } from './BtnStyles'


const Btn = ({ children, secondary, disabled = false, onClick }) => {
    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }
    };
  
    return (
      <StyledButton disabled={disabled} onClick={handleClick} secondary={secondary}>
        {children}
      </StyledButton>
    );
  };
  
  export default Btn;