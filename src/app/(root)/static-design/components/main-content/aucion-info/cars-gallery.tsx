import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import carOne from "@/assets/images/cars/car-1.jpeg";
import carTwo from "@/assets/images/cars/car-2.jpeg";
import carThree from "@/assets/images/cars/car-3.webp";
import carFour from "@/assets/images/cars/car-4.jpeg";
import carFive from "@/assets/images/cars/car-5.webp";

const CAR_IMAGES = [carOne, carTwo, carThree, carFour, carFive];
const CarImageGallery = () => {
  return (
    <aside className="flex justify-between lg:flex-col gap-1 lg:gap-2 items-center ">
      <Button
        size={"icon"}
        className="bg-white shadow-md w-8 h-8 transition rounded-lg"
      >
        <ChevronUp className="text-black h-6 w-6 max-lg:rotate-90" />
      </Button>

      {CAR_IMAGES.map((car, index) => (
        <Button
          key={index}
          variant={"link"}
          className="w-20 h-20 max-sm:w-14 max-sm:h-14 overflow-hidden rounded-lg relative "
        >
          <Image
            src={car}
            fill
            alt="car"
            className="object-cover"
            sizes="160px"
          />
        </Button>
      ))}

      <Button
        size={"icon"}
        className="bg-white shadow-md w-8 h-8 transition rounded-lg"
      >
        <ChevronDown className="text-black h-6 w-6 max-lg:rotate-90" />
      </Button>
    </aside>
  );
};

export default CarImageGallery;
