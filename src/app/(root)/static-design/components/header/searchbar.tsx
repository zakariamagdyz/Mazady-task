import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import mazadyLogo from "@/assets/images/mazady-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import SearchTypeSelector from "./search-type-selector";

const SearhBar = () => {
  return (
    <section className="layout py-3">
      <div className="layout-right">
        <form className="flex items-center bg-primary/10 ">
          <SearchTypeSelector />
          <Input
            className="border-none bg-transparent placeholder:font-regular placeholder:text-[#323232]"
            placeholder="ابحث هنا"
          />
          <Button size="default" className="bg-primary px-5">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </form>
      </div>
      <aside className="layout-left mr-auto max-md:order-first">
        <Button asChild className="p-0 hover:no-underline " variant={"link"}>
          <Link href="/static-design">
            <Image src={mazadyLogo} alt="mazady logo" width="109" height="35" />
          </Link>
        </Button>
      </aside>
    </section>
  );
};

export default SearhBar;
