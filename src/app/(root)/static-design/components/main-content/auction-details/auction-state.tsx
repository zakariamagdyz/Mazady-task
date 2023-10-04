import { DollarSign } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AuctionState = () => {
  const auctionValue = (
    <div className="relative flex-1 rounded-lg bg-accent px-5 py-2">
      <dl className="space-y-2  text-center  text-white ">
        <dt className="text-sm">القيمة الحالية للمزاد</dt>
        <dd className="flex  justify-center">
          <span className="text-3xl font-bold">5000</span>
          <DollarSign className="mt-1 h-4 w-4" />
        </dd>
      </dl>
      <div className="absolute -bottom-2 left-1/2 flex w-max -translate-x-1/2 items-center justify-center rounded-full bg-white  shadow-xl">
        <Avatar className="h-5 w-5">
          <AvatarImage src="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
          <AvatarFallback>ZM</AvatarFallback>
        </Avatar>
        <p className="px-2 text-sm font-bold text-accent">أحمد الرائد</p>
      </div>
    </div>
  );
  return (
    <aside className=" space-y-2 rounded-lg p-3 py-5 shadow-md">
      <dl className="flex items-center justify-between rounded-lg bg-muted p-3 text-white  ">
        <dt className="">تاريخ البث</dt>
        <dd className="font-semibold">22-1-2022</dd>
      </dl>
      <div className="flex  gap-2">
        {auctionValue}
        <dl className="flex-1 space-y-2 rounded-lg  bg-accent/10 px-5 py-2 text-center text-accent ">
          <dt className="text-sm">القيمة الحالية بعد الضريبة</dt>
          <dd className="flex justify-center">
            <span className="text-3xl font-bold">5050</span>
            <DollarSign className=" mt-1 h-4 w-4" />
          </dd>
        </dl>
      </div>
    </aside>
  );
};

export default AuctionState;
