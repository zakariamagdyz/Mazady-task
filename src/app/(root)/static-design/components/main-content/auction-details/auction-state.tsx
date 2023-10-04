import { DollarSign } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AuctionState = () => {
  const auctionValue = (
    <div className="relative flex-1 rounded-lg py-2 px-5 bg-accent">
      <dl className="text-center  text-white font-medium space-y-2 ">
        <dt className="text-sm">القيمة الحالية للمزاد</dt>
        <dd className="flex  justify-center">
          <span className="font-bold text-3xl">5000</span>
          <DollarSign className="w-4 h-4 mt-1" />
        </dd>
      </dl>
      <div className="absolute -bottom-2 w-max left-1/2 -translate-x-1/2 bg-white rounded-full flex items-center justify-center  shadow-xl">
        <Avatar className="w-5 h-5">
          <AvatarImage src="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
          <AvatarFallback>ZM</AvatarFallback>
        </Avatar>
        <p className="text-accent font-bold text-sm px-2">أحمد الرائد</p>
      </div>
    </div>
  );
  return (
    <aside className=" shadow-md rounded-lg p-3 py-5 space-y-2">
      <dl className="flex items-center justify-between rounded-lg bg-muted text-white p-3  ">
        <dt className="font-medium">تاريخ البث</dt>
        <dd className="font-semibold">22-1-2022</dd>
      </dl>
      <div className="flex  gap-2">
        {auctionValue}
        <dl className="text-center bg-accent/10 text-accent font-medium rounded-lg py-2 px-5 space-y-2 flex-1 ">
          <dt className="text-sm">القيمة الحالية بعد الضريبة</dt>
          <dd className="flex justify-center">
            <span className="font-bold text-3xl">5050</span>
            <DollarSign className=" w-4 h-4 mt-1" />
          </dd>
        </dl>
      </div>
    </aside>
  );
};

export default AuctionState;
