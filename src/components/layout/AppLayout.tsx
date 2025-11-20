import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => (
  <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
    <div className="flex min-h-screen flex-col gap-10">{children}</div>
  </div>
);
