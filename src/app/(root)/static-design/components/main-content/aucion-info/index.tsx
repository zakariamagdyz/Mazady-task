import React from "react";
import CarImageGallery from "./cars-gallery";
import AuctionInfoCard from "./auction-info-card";
import SellerMessageBox from "./seller-msg-box";

const AuctionInfo = () => {
  return (
    <div className="grid lg:grid-cols-8 gap-2">
      <aside className="col-span-1 lg:mr-auto">
        <CarImageGallery />
      </aside>
      <section className="lg:col-span-7 space-y-8">
        <AuctionInfoCard />
        <SellerMessageBox />
      </section>
    </div>
  );
};

export default AuctionInfo;
