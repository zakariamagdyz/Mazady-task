import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AuctionSlide from "./auction-slide";
import SellerInfo from "./seller-info";

const AuctionInfoCard = () => {
  return (
    <section className="min-h-[600px] overflow-hidden rounded-lg shadow-md">
      <AuctionSlide />
      <section className="space-y-6 p-4 py-3">
        <SellerInfo />
        <div>
          <h2 className="text-xl font-bold text-muted">
            شراء مجموعة من السيارات من موديلات1990
          </h2>
          <p className="text-[#808080]">code 1234</p>
        </div>

        <div className="flex justify-between gap-2 max-md:flex-col max-md:gap-4 md:items-center">
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <p
                key={i}
                className="rounded-lg bg-[#D20653]/10 p-4 text-xl font-regular leading-none text-primary md:max-xl:p-3 xl:p-4"
              >
                10000+
              </p>
            ))}
          </div>
          <form action="" className="flex gap-3">
            <fieldset className="flex-1">
              <Input
                placeholder="اكتب المبلغ"
                className="border-[#ccc] placeholder:font-bold placeholder:text-[#ccc]"
              />
            </fieldset>
            <Button className="bg-gradient-primary-linear font-bold">
              تأكيد
            </Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default AuctionInfoCard;
