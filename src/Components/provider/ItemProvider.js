import React, { useState } from "react";
import ItemContext from "../../contexts/ItemContext";
import { items as itemData } from "../../data";

const ItemProvider = ({ children }) => {
  const addItem = (newItem) => {
    setItemState(() => {
      return { ...itemState, items: [...itemState.items, newItem] };
    });
  };

  const initialState = {
    items: itemData,
    addItem,
  };

  const [itemState, setItemState] = useState(initialState);

  return (
    <ItemContext.Provider value={itemState}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;
