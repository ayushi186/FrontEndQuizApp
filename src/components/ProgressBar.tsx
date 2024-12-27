import React from "react";

import { ContainerStyles, FillerStyles } from "./StyledComp";
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
