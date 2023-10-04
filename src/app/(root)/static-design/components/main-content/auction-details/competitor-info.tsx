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
    <li className="flex gap-2">
      <Avatar>
        <AvatarImage src={imageURL} className="rounded-full" />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>

      <div className="flex flex-1 flex-col justify-center">
        <h3 className="text-base font-bold">{name}</h3>
        <time className="text-sm text-[#808080] ">{time}</time>
      </div>
      <p className="self-start bg-secondary/10 px-4 py-1 text-2xl font-bold text-secondary">
        {vote}
      </p>
    </li>
  );
};

export default CompetitorInfo;
