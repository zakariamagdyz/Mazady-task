import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BellRing, ChevronDown, Heart, Receipt } from "lucide-react";

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
        <Receipt className="  text-white h-6 w-6 group-hover:text-yellow-400" />
      </Button>{" "}
      <Button size={"icon"} variant={"link"} className="group">
        <BellRing className=" fill-white text-white h-6 w-6 group-hover:text-yellow-400 group-hover:fill-yellow-400" />
      </Button>
      <Button size={"icon"} variant={"link"} className="group">
        <Heart className="text-white h-6 w-6 fill-white group-hover:fill-yellow-400 group-hover:text-yellow-400" />
      </Button>
      <Button className="rounded-full text-lg flex items-center gred text-white ">
        عربية
        <ChevronDown className="text-white h-8 w-8" />
      </Button>
    </div>
  );
  return (
    <section className="bg-gradient-to-r from-primary  to-primary-dark">
      <div className="layout py-4">
        <nav className="layout-right ">
          <ul className="flex ">
            {NAVBAR_MENUES.map((menu) => (
              <li key={menu.href}>
                <Button
                  asChild
                  variant={"link"}
                  className="text-white hover:text-black transition hover:no-underline text-base"
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
