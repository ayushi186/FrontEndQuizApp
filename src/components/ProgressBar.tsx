import React from "react";
import { ContainerStyles, FillerStyles } from "./StyledComp";
import { IProgressBarProps } from "../types/types";

const ProgressBar = ({
  bgcolor,
  completed,
}: IProgressBarProps): React.ReactElement => {
  return (
    <ContainerStyles>
      <FillerStyles bgcolor={bgcolor} completed={completed}>
        {/* <LabelStyles></LabelStyles> */}
      </FillerStyles>
    </ContainerStyles>
  );
};

export default ProgressBar;
