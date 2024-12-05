import { type } from "os";
import React from "react";
import { styled, Styled } from "styled-components";
import { ContainerStyles, FillerStyles, LabelStyles } from "./StyledComp";
type Props = {
  bgcolor: string;
  completed: any;
};
const ProgressBar = ({ bgcolor, completed }: Props) => {
  return (
    <ContainerStyles>
      <FillerStyles bgcolor={bgcolor} completed={completed}>
        {/* <LabelStyles></LabelStyles> */}
      </FillerStyles>
    </ContainerStyles>
  );
};

export default ProgressBar;
