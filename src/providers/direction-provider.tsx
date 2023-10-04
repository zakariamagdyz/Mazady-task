"use client";
import { DirectionProvider as Direction } from "@radix-ui/react-direction";

export const DirectionProvider = ({
  dir,
  children,
}: {
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}) => <Direction dir={dir}>{children}</Direction>;
