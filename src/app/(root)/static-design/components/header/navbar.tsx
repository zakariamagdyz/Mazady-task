import { BellRing, ChevronDown, Heart, Receipt } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const NAVBAR_MENUES = [
  {
    href: "/home",
    label: "الرئيسية",
  },
  {
    href: "/categories",
    label: "التصنيفات",
  },
  {
    href: "/my-orders",
    label: "مشترياتي",
  },
  {
    href: "/profile",
    label: "حسابي",
  },
];
const NavBar = () => {
  const actionMenus = (
    <div className="flex gap-4">
      <Button size={"icon"} variant={"link"} className="group">
        <Receipt className="  h-6 w-6 text-white group-hover:text-yellow-400" />
      </Button>
      <Button size={"icon"} variant={"link"} className="group">
        <BellRing className=" h-6 w-6 fill-white text-white group-hover:fill-yellow-400 group-hover:text-yellow-400" />
      </Button>
      <Button size={"icon"} variant={"link"} className="group">
        <Heart className="h-6 w-6 fill-white text-white group-hover:fill-yellow-400 group-hover:text-yellow-400" />
      </Button>
      <Button className="flex items-center rounded-full bg-gradient-secondary-radial text-lg  text-white ">
        عربية
        <ChevronDown className="h-8 w-8 text-white" />
      </Button>
    </div>
  );
  return (
    <section className="bg-gradient-to-r from-primary  to-primary-dark">
      <div className="layout py-4">
        <nav className="layout-right">
          <ul className="flex ">
            {NAVBAR_MENUES.map((menu) => (
              <li key={menu.href}>
                <Button
                  asChild
                  variant={"link"}
                  className="text-base text-white transition hover:text-black hover:no-underline"
                >
                  <Link href={menu.href}>{menu.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="layout-left mr-auto">{actionMenus}</div>
      </div>
    </section>
  );
};

export default NavBar;
