import React from "react";

const AUCTION_VALUES = [
  { id: 11, name: "القيمة الابتدائية", value: 5000 },
  { id: 12, name: "القيمة التقريبية", value: 4000 },
  { id: 13, name: "العربون", value: 3500 },
  { id: 14, name: "سعر الشراء الفوري", value: 5000 },
  { id: 15, name: "قيمة ذيادة المزاد", value: 8000 },
];

const AuctionValues = () => {
  return (
    <aside className=" shadow-md rounded-lg py-6 px-5  space-y-4">
      {AUCTION_VALUES.map((auctionValue) => (
        <div
          key={auctionValue.id}
          className="flex items-center justify-between rounded-lg bg-[#707070]/10 text-[#707070] p-3  "
        >
          <dt className="font-medium text-lg">{auctionValue.name}</dt>
          <dd className="font-semibold text-2xl">{auctionValue.value}</dd>
        </div>
      ))}
    </aside>
  );
};

export default AuctionValues;
