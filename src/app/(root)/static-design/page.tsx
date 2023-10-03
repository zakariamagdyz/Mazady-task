import React from "react";

import { tajawalFont } from "@/utils/fonts";
import Header from "./components/header";
import { DirectionProvider } from "@/providers/direction-provider";
import MainContent from "./components/main-content";

const StaticDesignPage = () => {
  return (
    <DirectionProvider>
      <main lang="ar" dir="rtl">
        <Header />
        <MainContent />
      </main>
    </DirectionProvider>
  );
};

export default StaticDesignPage;
