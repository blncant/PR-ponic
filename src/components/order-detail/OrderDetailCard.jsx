import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './OrderDetailCardStyles';

const OrderDetailCard = ({ imgCard, name, quantity, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={imgCard}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}U</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default OrderDetailCard;