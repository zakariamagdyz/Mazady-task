"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Heart, Star } from "lucide-react";
import React from "react";

const SellerInfo = () => {
  const userAvatar = (
    <figure className="relative ">
      <Avatar>
        <AvatarImage
          src={"https://randomuser.me/api/portraits/thumb/men/60.jpg"}
          className="rounded-full w-14 h-14"
        />
        <AvatarFallback>{"John Doe"}</AvatarFallback>
      </Avatar>
      <Button
        size={"icon"}
        variant={"link"}
        className="absolute right-8 -bottom-3 w-8 h-8 rounded-full bg-white shadow-xl"
      >
        <Heart className="fill-[#E3E3E3] text-[#E3E3E3] h-5 w-5" />
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
      <ul className="flex gap-1 items-center self-start mt-3">
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
