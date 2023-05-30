import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
