import React, { Fragment } from "react";
import AuctionState from "./auction-state";
import Competitors from "./competitors";
import AuctionValues from "./auction-values";

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
