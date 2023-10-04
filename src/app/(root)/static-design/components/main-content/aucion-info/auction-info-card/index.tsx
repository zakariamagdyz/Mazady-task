import React from "react";
import AuctionSlide from "./auction-slide";

const AuctionInfoCard = () => {
  return (
    <section className="shadow-md py-6 px-5 rounded-lg min-h-[600px]">
      <figure className="h-[380px]">
        <AuctionSlide />
      </figure>
      Auction info card
    </section>
  );
};

export default AuctionInfoCard;
