import React, { Fragment } from "react";

import AuctionState from "./auction-state";
import AuctionValues from "./auction-values";
import Competitors from "./competitors";

const AuctionDetails = () => {
  return (
    <Fragment>
      <AuctionState />
      <Competitors />
      <AuctionValues />
    </Fragment>
  );
};

export default AuctionDetails;
