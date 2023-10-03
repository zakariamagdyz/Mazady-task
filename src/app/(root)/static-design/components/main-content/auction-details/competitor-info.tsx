"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FC } from "react";

type CompetitorInfoProps = {
  name: string;
  imageURL: string;
  time: string;
  vote: string;
};
const CompetitorInfo: FC<CompetitorInfoProps> = ({
  imageURL,
  name,
  time,
  vote,
}) => {
  return (
    <section className="flex gap-2">
      <Avatar>
        <AvatarImage src={imageURL} className="rounded-full" />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>

      <p className="flex flex-col justify-center flex-1">
        <h3 className="font-bold text-base">{name}</h3>
        <time className="text-sm text-[#808080]">{time}</time>
      </p>
      <p className="bg-[#FDBC01]/10 text-[#FDBC01] font-bold text-2xl self-start py-1 px-4">
        {vote}
      </p>
    </section>
  );
};

export default CompetitorInfo;
