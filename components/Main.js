import React, { memo } from "react";
import MyWonderfulComponent from "./MyWonderfulComponent";

const Main = (props) => {
  return (
    <MyWonderfulComponent {...props}>
      Im text from a component
    </MyWonderfulComponent>
  );
};

export default memo(Main);
