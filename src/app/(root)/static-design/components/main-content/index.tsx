import React from "react";
import AuctionDetails from "./auction-details";

const MainContent = () => {
  return (
    <section className="layout mt-12">
      <section className="layout-right">فيديو</section>
      <aside className="layout-left space-y-5">
        <AuctionDetails />
      </aside>
    </section>
  );
};

export default MainContent;
