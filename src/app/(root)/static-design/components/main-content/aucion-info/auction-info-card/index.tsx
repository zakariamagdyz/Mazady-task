import React from "react";
import AuctionSlide from "./auction-slide";
import SellerInfo from "./seller-info";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AuctionInfoCard = () => {
  return (
    <section className="shadow-md overflow-hidden rounded-lg min-h-[600px]">
      <AuctionSlide />
      <section className="p-4 py-3 space-y-6">
        <SellerInfo />
        <div>
          <h2 className="font-bold text-muted text-xl">
            شراء مجموعة من السيارات من موديلات1990
          </h2>
          <p className="text-[#808080] font-medium">code 1234</p>
        </div>

        <div className="flex max-md:flex-col max-md:gap-4 md:items-center justify-between gap-2">
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <p
                key={i}
                className="p-4 md:max-xl:p-3 xl:p-4 bg-[#D20653]/10 text-primary font-medium text-xl rounded-lg leading-none"
              >
                10000+
              </p>
            ))}
          </div>
          <form action="" className="flex gap-3">
            <fieldset className="flex-1">
              <Input
                placeholder="اكتب المبلغ"
                className="placeholder:font-bold border-[#ccc] placeholder:text-[#ccc]"
              />
            </fieldset>
            <Button className="btn-gradient font-bold">تأكيد</Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default AuctionInfoCard;
