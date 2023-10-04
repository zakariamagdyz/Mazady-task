import React from "react";

import AuctionInfoCard from "./auction-info-card";
import CarImageGallery from "./cars-gallery";
import SellerMessageBox from "./seller-msg-box";

const AuctionInfo = () => {
  return (
    <div className="grid gap-2 lg:grid-cols-8">
      <aside className="col-span-1 lg:mr-auto">
        <CarImageGallery />
      </aside>
      <section className="space-y-8 lg:col-span-7">
        <AuctionInfoCard />
        <SellerMessageBox />
      </section>
    </div>
  );
};

export default AuctionInfo;
