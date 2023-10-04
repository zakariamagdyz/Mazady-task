import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import React from "react";

const SellerMessageBox = () => {
  return (
    <section className="shadow-md py-6 px-5 rounded-lg space-y-2">
      <h2 className="font-bold text-2xl text-[#414141]">
        ارسال رسالة الى البائع
      </h2>
      <p className="font-normal text-[#414141] ">
        يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار
      </p>
      <form action="" className="flex gap-1 items-center ">
        <Input
          placeholder="اكتب سؤالك"
          className="border border-[#E3E3E3] rounded-3xl bg-[#F3F3F3] placeholder:text-[#707070] "
        />
        <Button size={"icon"} className="rounded-full btn-gradient">
          <SendHorizonal className="rotate-180 w-6 h-6" />
        </Button>
      </form>
    </section>
  );
};

export default SellerMessageBox;
