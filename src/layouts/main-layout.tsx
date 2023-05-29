import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";

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
    </>
  );
};

export default MainLayout;
