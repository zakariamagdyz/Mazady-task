"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Heart, Star } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const SellerInfo = () => {
  const userAvatar = (
    <figure className="relative ">
      <Avatar>
        <AvatarImage
          src={"https://randomuser.me/api/portraits/thumb/men/60.jpg"}
          className="h-14 w-14 rounded-full"
        />
        <AvatarFallback>{"John Doe"}</AvatarFallback>
      </Avatar>
      <Button
        size={"icon"}
        variant={"link"}
        className="absolute -bottom-3 right-8 h-8 w-8 rounded-full bg-white shadow-xl"
      >
        <Heart className="h-5 w-5 fill-[#E3E3E3] text-[#E3E3E3]" />
      </Button>
    </figure>
  );
  return (
    <section className="flex items-center gap-3">
      {userAvatar}

      <div className="self-end">
        <h2 className="text-xl font-bold text-accent">اسم البائع</h2>
        <p className="text-sm text-accent">966598398+</p>
      </div>
      <ul className="mt-3 flex items-center gap-1 self-start">
        <li>
          <Star className="fill-[#D1D1D1] text-[#D1D1D1]" />
        </li>
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i}>
            <Star className="fill-[#FFBD06] text-[#FFBD06]" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SellerInfo;
