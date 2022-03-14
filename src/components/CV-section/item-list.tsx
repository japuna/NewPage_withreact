import React from "react";
import { ItemListStyles } from "./styles";

export interface ItemListProps {
  title?: string;
  subtitle?: string;
  description?: string;
  text?: string;
}

const ItemList = (item: ItemListProps): JSX.Element => {
  return (
    <ItemListStyles>
      {item.title && <h4>{item.title}</h4>}
      {item.subtitle && <h5>{item.subtitle}</h5>}
      {item.description && <p>{item.description}</p>}
      {item.text && <p>{item.text}</p>}
    </ItemListStyles>
  );
};

export default ItemList;
