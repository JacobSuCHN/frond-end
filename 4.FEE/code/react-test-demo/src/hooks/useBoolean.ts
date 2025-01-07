import { useState } from "react";

export const useBoolean = (initValue) => {
  const [bol, setBol] = useState(initValue);

  const toggle = () => {
    setBol(!bol);
  };

  return [bol, toggle];
};
