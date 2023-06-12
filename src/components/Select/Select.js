import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectBar value={value} onChange={onChange}>
        {children}
      </SelectBar>
      <DisplayedPart>
        {displayedValue}
        <IconWrapper style={{ "--height": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </DisplayedPart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectBar = styled.select`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const DisplayedPart = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--height);
`;

export default Select;
