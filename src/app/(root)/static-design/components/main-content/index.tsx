import React from "react";
import AuctionDetails from "./auction-details";
import SellerMessageBox from "./seller-msg-box";

const MainContent = () => {
  return (
    <section className="layout mt-12">
      <section className="layout-right self-start">
        <div className="grid grid-cols-8 gap-1">
          <aside className="bg-lime-50">hi</aside>
          <section className="col-span-7">
            <div>
              <SellerMessageBox />
            </div>
          </section>
        </div>
      </section>
      <aside className="layout-left space-y-5">
        <AuctionDetails />
      </aside>
    </section>
  );
};

export default MainContent;
