import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Tabs from "@/components/tabs";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <Tabs />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
