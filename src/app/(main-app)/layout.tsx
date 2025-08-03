import MainLayout from "@/app/MainLayout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
      <MainLayout>
        {children}
      </MainLayout>
  );
}
