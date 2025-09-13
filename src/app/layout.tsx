import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "三下乡活动展示网站",
  description: "记录大学生三下乡志愿服务活动的精彩瞬间和深刻体验",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
