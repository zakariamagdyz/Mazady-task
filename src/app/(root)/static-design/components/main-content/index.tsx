import React from "react";
import AuctionDetails from "./auction-details";
import SellerMessageBox from "./aucion-info/seller-msg-box";
import CarImageGallery from "./aucion-info/cars-gallery";
import AuctionInfoCard from "./aucion-info/auction-info-card";
import AuctionInfo from "./aucion-info";

const MainContent = () => {
  return (
    <section className="layout mt-12">
      <section className="layout-right self-start">
        <AuctionInfo />
      </section>
      <aside className="layout-left space-y-5">
        <AuctionDetails />
      </aside>
    </section>
  );
};

export default MainContent;
