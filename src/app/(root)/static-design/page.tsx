import { DirectionProvider } from "@/providers/direction-provider";
import Header from "./components/header";
import MainContent from "./components/main-content";
import { Metadata } from "next";

const StaticDesignPage = () => {
  return (
    <DirectionProvider dir="rtl">
      <main lang="ar" dir="rtl">
        <Header />
        <MainContent />
      </main>
    </DirectionProvider>
  );
};

export default StaticDesignPage;
