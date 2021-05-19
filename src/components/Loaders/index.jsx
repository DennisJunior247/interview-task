import React from "react";
import { PageLoaderBox} from "./loaders.styles";


export const PageLoader = (props) => {

  return (
    <PageLoaderBox
      {...props}
    >
      <div className={"ripple"}>
        <div />
        <div />
      </div>
    </PageLoaderBox>
  )
};



