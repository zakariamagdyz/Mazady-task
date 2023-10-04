import React from "react";

const AUCTION_VALUES = [
  { id: 11, name: "القيمة الابتدائية", value: 5000 },
  { id: 12, name: "القيمة التقريبية", value: 4000 },
  { id: 13, name: "العربون", value: 3500 },
  { id: 14, name: "سعر الشراء الفوري", value: 5000 },
  { id: 15, name: "قيمة زيادة المزاد", value: 8000 },
];

const AuctionValues = () => {
  return (
    <ul className=" space-y-4 rounded-lg px-5 py-6  shadow-md">
      {AUCTION_VALUES.map((auctionValue) => (
        <li
          key={auctionValue.id}
          className="flex items-center justify-between rounded-lg bg-[#707070]/10 p-3 text-[#707070]  "
        >
          <dt className=" text-lg">{auctionValue.name}</dt>
          <dd className="text-2xl font-semibold">{auctionValue.value}</dd>
        </li>
      ))}
    </ul>
  );
};

export default AuctionValues;
