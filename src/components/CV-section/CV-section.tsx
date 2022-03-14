import React from "react";
import ItemList from "./item-list";
import { CVSectionsStyles } from "./styles";
import { ItemListProps } from "./item-list";

interface CVSectionProps {
  item: ItemListProps[];
  title: string;
}

const CVSection = ({ item, title }: CVSectionProps): JSX.Element => {
  return (
    <CVSectionsStyles>
      <h3>{title}</h3>
      {item &&
        item.map((itemProps, index) => <ItemList key={index} {...itemProps} />)}
    </CVSectionsStyles>
  );
};

export default CVSection;
