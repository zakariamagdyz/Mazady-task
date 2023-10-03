"use client";
import { DirectionProvider as Direction } from "@radix-ui/react-direction";

export const DirectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <Direction dir="rtl">{children}</Direction>;
