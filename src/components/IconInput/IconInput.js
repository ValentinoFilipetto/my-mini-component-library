import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let Component;

  if (size === "small") {
    Component = SmallSearch;
  } else if (size === "large") {
    Component = LargeSearch;
  }
  return (
    <Component style={{ "--width": width + "px" }}>
      <Icon id={icon} strokeWidth={1} size={24} />
      <Label>{placeholder}</Label>
    </Component>
  );
};

const SmallSearch = styled.div`
  position: relative;
  width: var(--width);
  border-bottom: 1px solid #000000;
  color: ${COLORS.gray500};
  padding-bottom: 2px;
`;

const LargeSearch = styled.div`
  position: relative;
  width: var(--width);
  border-bottom: 2px solid #000000;
  color: ${COLORS.gray700};
  padding-bottom: 2px;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 33px;
  top: 5px;
`;

export default IconInput;
